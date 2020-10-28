import { auth } from 'firebase-functions'
import admin from 'firebase-admin'
// import { FirestoreCollections } from '@projectlink/core'
// can't deploy functions with this depedency for some fucking reason
// just strip functions and core out into their own repos

const onCreateUser = auth.user().onCreate(handleCreateUser)

async function handleCreateUser(user: admin.auth.UserRecord) {
  await admin
    .firestore()
    .collection('accounts')
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
