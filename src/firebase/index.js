import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// firebase init - add your own config here
/* const config = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
}; */
const config = {
    apiKey: "AIzaSyB1aKO6Yial7CluAObTBBD7nMFEqGYUiV4",
    authDomain: "verseed.firebaseapp.com",
    projectId: "verseed",
    storageBucket: "verseed.appspot.com",
    messagingSenderId: "149138909843",
    appId: "1:149138909843:web:6898c1f8ccc83d8b46bb66"
  };
firebase.initializeApp(config)

// utils
const db = getFirestore();
const auth = getAuth();

// export utils/refs
export {
    db,
    auth,
}