// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvRG5-QFOL0b6swAosVqqia1NLzYxIcK0",
  authDomain: "birthday-d0182.firebaseapp.com",
  projectId: "birthday-d0182",
  storageBucket: "birthday-d0182.appspot.com",
  messagingSenderId: "629248021490",
  appId: "1:629248021490:web:863bdf8627863e90b2916b"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;