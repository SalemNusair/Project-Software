//this for only what we need
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
export const Config = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
};
firebase.initializeApp(Config);
//update from firebase on how to work with timestamp
//firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
