const firebaseAdmin = require("firebase-admin");

// This is private service account key that you can download from Firebase Console
const serviceAccount = require("./serviceAccount.json");

const firebaseApp = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  storageBucket: "gs://guestify-findit.appspot.com",
});

const storage = firebaseAdmin.storage().bucket();

module.exports = { firebaseAdmin, storage };
