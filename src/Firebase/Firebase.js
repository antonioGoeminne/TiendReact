import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = { };

const fb = firebase.initializeApp(firebaseConfig);

export const database = fb.firestore();