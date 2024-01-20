// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAh_Wn9jwgo820CcCOfOOWKxoZCx1y2Jxs",
  authDomain: "provisions-store.firebaseapp.com",
  projectId: "provisions-store",
  storageBucket: "provisions-store.appspot.com",
  messagingSenderId: "1068839305092",
  appId: "1:1068839305092:web:ac2b6a5eee28b4ca02e7d1",
  measurementId: "G-55NJ2NCBFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider }