import { auth } from "firebase-functions"
import admin from "firebase-admin";
import { constants } from "@projectlink/core";

auth.user().onCreate(user => {
  // create a base profile document
  admin.firestore().collection(constants.Collections.users)
    .doc(user.uid)
    .set({
      uid: user.uid,
      profiles: [],
    })
})
