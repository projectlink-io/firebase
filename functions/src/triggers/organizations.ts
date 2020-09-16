import { firestore } from 'firebase-admin'
import * as functions from 'firebase-functions'
import { Collections } from '../../../src/constants'
import { keyify } from '../../../src/util/categories'
import { Category } from '../../../src/models'
import index, { formatCompanyRecord } from '../../../src/services/algolia'

/**
 * When companies are created or updated we save category strings onto the document.
 * These categories are fetched from the database and important for keeping companies
 * organized.
 *
 * Once the categories are up to date we save the company as an algolia record.
 */

const onCreateCompany = functions.firestore
  .document(`${Collections.organizations}/{uid}`)
  .onCreate(handleCreateCompany)

const onUpdateCompany = functions.firestore
  .document(`${Collections.organizations}/{uid}`)
  .onUpdate(handleUpdateCompany)

async function handleCreateCompany(snap: functions.firestore.DocumentSnapshot, _context: functions.EventContext) {
  try {
    const doc = await populateCategories(snap)
    await saveRecord(doc)
  } catch (e) {
    console.error(e)
  }
}

async function handleUpdateCompany(change: functions.Change<functions.firestore.DocumentSnapshot>, _context: functions.EventContext) {
  try {
    /**
     * repopulate categories if subindustry
     * has changed
     */
    if (eachIsEqual(change.after.data()?.subindustries, change.before.data()?.subindustries)) {
      await saveRecord(change.after.data())
    } else {
      await populateCategories(change.after)
    }
  } catch (e) {
    console.error(e)
  }
}

/**
 * get the categories from our database
 * and add the corresponding sector and
 * industry to the company document
 */
async function populateCategories(snap: functions.firestore.DocumentSnapshot) {
  const categories: firestore.DocumentSnapshot[] = await Promise.all(snap.data()?.subindustries.map((s: string) => {
    if (!s) return null
    return firestore()
      .collection(Collections.categories)
      .doc(keyify(s))
      .get()
  }))

  const data = (doc: firestore.DocumentSnapshot) => doc.data?.() as Category
  const prop = (p: string) => (o: object) => o[p]
  const getSector = prop('sector')
  const getIndustry = prop('industry')
  const getSubindustry = prop('name')

  /**
   * get all the sectors, industries, and subindstries
   * from the fetched categories
   */
  const sectors: string[] = categories.map(data).filter(x => x).map(getSector)
  const industries: string[] = categories.map(data).filter(x => x).map(getIndustry)
  const subindustries: string[] = categories.map(data).filter(x => x).map(getSubindustry)

  await Promise.all(categories.map(cat => {
    return firestore()
      .collection(Collections.organizations)
      .doc(snap.id)
      .update({
        sectors,
        industries,
        subindustries,
      })
  }))

  /**
   * return the updated document
   * so it can be indexed
   */
  return {
    ...snap.data(),
    industries,
    sectors,
    subindustries,
  }
}

async function saveRecord(document: any) {
  console.info(`indexing record ${JSON.stringify(document)}`)
  await index.saveObject(formatCompanyRecord(document))
}

/**
 * shallow compare two arrays of strings
 */
export const eachIsEqual = (arr1: string[], arr2: string[]) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  return arr1.every((_e, i) => arr1[i] === arr2[i])
}

export {
  onCreateCompany,
  onUpdateCompany,
}
