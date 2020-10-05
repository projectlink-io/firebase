import { firestore } from 'firebase-admin'
import { constants } from "@projectlink/core"

const getByName = async (name) => {
  return await firestore()
    .collection(constants.Collections.categories)
    .where("name", "==", name)
    .get()
}

const categoriesService = {
  getByName,
}

export default categoriesService