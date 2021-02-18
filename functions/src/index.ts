import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

if (!firebase.apps.length) {
  firebase.initializeApp()
}

// Firestore connection
const db = firebase.firestore()

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  db.collection('User').doc
  response.send("Hello from Firebase!");
});
