//this for only what we need
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
export const Config = {
  apiKey: "AIzaSyA5FA5JJEUad8ojtsppUJH8i3fp1ORK2QA",
  authDomain: "coms-practice.firebaseapp.com",
  databaseURL: "https://coms-practice.firebaseio.com",
  projectId: "coms-practice",
  storageBucket: "coms-practice.appspot.com",
  messagingSenderId: "49537411312",
  appId: "1:49537411312:web:28e455b0f8e579a8287a35",
  measurementId: "G-TQQQQPP8MX"
};
firebase.initializeApp(Config);
//update from firebase on how to work with timestamp
//firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
