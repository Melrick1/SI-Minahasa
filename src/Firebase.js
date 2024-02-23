// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWTRO2sOSY6n0bPfkUPUKBSqGYp6MEIxs",
  authDomain: "login-67bc7.firebaseapp.com",
  projectId: "login-67bc7",
  storageBucket: "login-67bc7.appspot.com",
  messagingSenderId: "999452342402",
  appId: "1:999452342402:web:0b524d9c99ee2f2204dc9b",
  measurementId: "G-6B35203V8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const Auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const DB = getFirestore(app);