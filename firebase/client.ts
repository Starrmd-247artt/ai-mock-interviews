// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyCX93jPhIgU0mdMMGn9Vx_WAG2d_GcoK7c",
    authDomain: "prepwise-fc439.firebaseapp.com",
    projectId: "prepwise-fc439",
    storageBucket: "prepwise-fc439.firebasestorage.app",
    messagingSenderId: "317411969109",
    appId: "1:317411969109:web:768f201d4c0b3286846cdc",
    measurementId: "G-4HYG3RZBEL"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);