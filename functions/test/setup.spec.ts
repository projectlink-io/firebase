import * as admin from 'firebase-admin'
// import init from 'firebase-functions-test'
// import admin from 'firebase-admin'
const serviceAccount = require('../../../credentials-firebase-test.json')

// export const test = init({
//   databaseURL: 'https://projectlink-test.firebaseio.com',
//   projectId: 'projectlink-test',
//   storageBucket: 'projectlink-test.appspot.com',
// }, '../../projectlink-test-adminsdk.json')

beforeAll(() => {
  console.log("BEFORE HOOK!!!!")
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://projectlink-test.firebaseio.com',
  })
})