import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = { 
    apiKey: "AIzaSyBW65HBs3ZmPg8daIN1rUCf411c1twdOdg",
    authDomain: "tiendabuscalibrosreact.firebaseapp.com",
    projectId: "tiendabuscalibrosreact",
    storageBucket: "tiendabuscalibrosreact.appspot.com",
    messagingSenderId: "46444143741",
    appId: "1:46444143741:web:1bd6d3ba8ac3fe48da7d14",
    measurementId: "G-N5TJXCTSBT"
};   

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();