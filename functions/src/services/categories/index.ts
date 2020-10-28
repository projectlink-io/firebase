import { firestore } from 'firebase-admin'
import { FirestoreCollections } from '@projectlink/core'

const getByName = async (name) => {
  return await firestore()
    .collection(FirestoreCollections.categories)
    .where("name", "==", name)
    .get()
}

const categoriesService = {
  getByName,
}

export default categoriesService