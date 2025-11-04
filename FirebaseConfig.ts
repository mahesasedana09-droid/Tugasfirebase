// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxegcXFfmlmXqXqeWiUmVdmkIDV6G6iU0",
  authDomain: "mahesa-e495d.firebaseapp.com",
  projectId: "mahesa-e495d",
  storageBucket: "mahesa-e495d.firebasestorage.app",
  messagingSenderId: "612724984543",
  appId: "1:612724984543:web:5b6a09a1148c077c81b76a",
  measurementId: "G-VEMLKPWWL9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const FIREBASE_APP = app;
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DB = getFirestore(app);