// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBvpxraVF7O7KPCkAcqlr2-jDymsdGFWK8",
  authDomain: "concert-cues.firebaseapp.com",
  projectId: "concert-cues",
  storageBucket: "concert-cues.appspot.com",
  messagingSenderId: "390239510726",
  appId: "1:390239510726:web:ca2250ed0da8aaa248b7c7",
  measurementId: "G-VLW3CQFGX2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
