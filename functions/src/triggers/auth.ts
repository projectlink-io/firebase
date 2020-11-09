import { auth } from 'firebase-functions'
import admin from 'firebase-admin'
import { FirestoreCollections } from 'projectlink-common'

const onCreateUser = auth.user().onCreate(handleCreateUser)

async function handleCreateUser(user: admin.auth.UserRecord) {
  await admin
    .firestore()
    .collection(FirestoreCollections.accounts)
    .doc(user.uid)
    .set({
      id: user.uid,
      createdAt: Date.now(),
      isDeleted: false,
    })
}

export {
  onCreateUser,
}
