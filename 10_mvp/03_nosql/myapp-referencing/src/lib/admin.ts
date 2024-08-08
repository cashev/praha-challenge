import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = require('./firebaseSecretKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

export const db = getFirestore();
