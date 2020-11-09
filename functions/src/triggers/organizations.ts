import admin from 'firebase-admin'
import ngeohash from 'ngeohash';
import * as functions from 'firebase-functions'
import { diff } from 'deep-object-diff'
import { AlgoliaIndexes, FirestoreCollections, OrganizationDocument } from 'projectlink-common'
import initIndex from '../util/algolia';

const setCustomClaims = async (uid: string, claims: { [key: string]: any }) => {
  return admin
    .auth()
    .setCustomUserClaims(uid, claims)
}

const handleRoles = async (document: OrganizationDocument) => {
  const people = Object.keys(document.id)

  return Promise.all(people
    .map(uid =>
      setCustomClaims(uid, {
        [document.id]: document.people[uid],
      })
    ))
}

const handleGeohash = async (document: OrganizationDocument) => {
  const geohash = ngeohash.encode(document.latitude, document.longitude)
  admin
    .firestore()
    .collection(FirestoreCollections.organizations)
    .doc(document.id)
    .set({ geohash }, { merge: true })
}

const formatRecord = (doc) => {
  const {
    id,
    displayName,
    latitude,
    longitude,
    topics,
  } = doc

  const hasLocation = latitude && longitude

  return {
    objectID: id,
    displayName,
    ...(hasLocation && { _geoloc: { lat: latitude, lng: longitude } } || {}),
    topics,
  }
}

const index = async (document: OrganizationDocument) => {
  const client = initIndex(AlgoliaIndexes.organizations)
  const record = formatRecord(document)
  return client.saveObject(record)
}

const handleCreate = async (snapshot: functions.firestore.QueryDocumentSnapshot, context: functions.EventContext) => {
  const doc = snapshot.data() as OrganizationDocument

  try {
    await handleRoles(doc)
    await handleGeohash(doc)
    await index(doc)
  } catch (e) {
    console.error(e)
  }
}

const handleUpdate = async (change: functions.Change<functions.firestore.QueryDocumentSnapshot>, context: functions.EventContext) => {
  const doc = change.after.data() as OrganizationDocument
  const changes = diff(change.before.data(), change.after.data()) as Partial<OrganizationDocument>
  const claimsHasChanged = changes.people
  const locationHasChanged = changes.latitude || changes.longitude

  try {
    if (claimsHasChanged) await handleRoles(doc)
    if (locationHasChanged) await handleGeohash(doc)
    await index(doc)
  } catch (e) {
  }
}

const onCreateOrganization = functions.firestore
  .document(`${FirestoreCollections.organizations}/{uid}`)
  .onCreate(handleCreate)

const onUpdateOrganization = functions.firestore
  .document(`${FirestoreCollections.organizations}/{uid}`)
  .onUpdate(handleUpdate)

// import { eachIsEqual } from '../util'
// import initIndex from '../util/algolia'
// import categoriesService from '../services/categories'

// /**
//  * When companies are created or updated we save category strings onto the document.
//  * These categories are fetched from the database and important for keeping companies
//  * organized.
//  *
//  * Once the categories are up to date we save the company as an algolia record.
//  */

// const allIndex = initIndex('companiesprojects:all');
// const organizationsIndex = initIndex('organizations:all');
// async function handleCreateCompany(snap: functions.firestore.DocumentSnapshot, _context: functions.EventContext) {
//   try {
//     const doc = await populateCategories(snap)
//     await saveRecord(doc)
//   } catch (e) {
//     console.error(e)
//   }
// }

// async function handleUpdateCompany(change: functions.Change<functions.firestore.DocumentSnapshot>, _context: functions.EventContext) {
//   try {
//     /**
//      * repopulate categories if subindustry
//      * has changed
//      */
//     if (eachIsEqual(change.after.data()?.subindustries, change.before.data()?.subindustries)) {
//       await saveRecord(change.after.data())
//     } else {
//       await populateCategories(change.after)
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }

// /**
//  * get the categories from our database
//  * and add the corresponding sector and
//  * industry to the company document
//  */
// async function populateCategories(snap: functions.firestore.DocumentSnapshot) {
//   const categories: firestore.DocumentSnapshot[] = await Promise.all(snap.data()?.subindustries.map((s: string) => {
//     if (!s) return null
//     return categoriesService.getByName(s)
//   }))

//   const data = (doc: firestore.DocumentSnapshot) => doc.data?.() as documents.Category
//   const prop = (p: string) => (o: object) => o[p]
//   const getSector = prop('sector')
//   const getIndustry = prop('industry')
//   const getSubindustry = prop('name')

//   /**
//    * get all the sectors, industries, and subindstries
//    * from the fetched categories
//    */
//   const sectors: string[] = categories.map(data).filter(x => x).map(getSector)
//   const industries: string[] = categories.map(data).filter(x => x).map(getIndustry)
//   const subindustries: string[] = categories.map(data).filter(x => x).map(getSubindustry)

//   await Promise.all(categories.map(cat => {
//     return firestore()
//       .collection(FirestoreCollections.organizations)
//       .doc(snap.id)
//       .update({
//         sectors,
//         industries,
//         subindustries,
//       })
//   }))

//   /**
//    * return the updated document
//    * so it can be indexed
//    */
//   return {
//     ...snap.data(),
//     industries,
//     sectors,
//     subindustries,
//   }
// }

// async function saveRecord(document: any) {
//   console.info(`indexing record ${JSON.stringify(document)}`)
//   const orgRecord = search.formatOrgRecord(document)
//   if (!orgRecord) return

//   await Promise.all([
//     await organizationsIndex.saveObject(orgRecord),
//     await allIndex.saveObject(orgRecord),
//   ]);
// }

export {
  onCreateOrganization,
  onUpdateOrganization,
}
