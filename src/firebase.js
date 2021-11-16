import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_6xK6xe8LZceK01DAqwkFe2Xyty5hjY4",
    authDomain: "roles-udea.firebaseapp.com",
    projectId: "roles-udea",
    storageBucket: "roles-udea.appspot.com",
    messagingSenderId: "388748434415",
    appId: "1:388748434415:web:8b2543da6fc7d17b3bf41a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const functions = firebase.functions()

export {db, auth, firebase, functions}