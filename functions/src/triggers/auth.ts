import { auth } from "firebase-functions"
import admin from "firebase-admin";
import { Collections } from "../../../src/constants";

auth.user().onCreate(user => {
  // create a base profile document
  admin.firestore().collection(Collections.users)
    .doc(user.uid)
    .set({
      uid: user.uid,
      profiles: [],
    })
})
