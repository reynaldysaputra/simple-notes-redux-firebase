import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBXMKxjdaPCNiIV4eEIYIcpcEHmWa8Byr4",
  authDomain: "simple-notes-firebase-7a2ee.firebaseapp.com",
  projectId: "simple-notes-firebase-7a2ee",
  storageBucket: "simple-notes-firebase-7a2ee.appspot.com",
  messagingSenderId: "917839118227",
  appId: "1:917839118227:web:bd7c5ed8923c683b80b266",
  measurementId: "G-CZM1VQKBG9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;