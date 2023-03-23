// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore,collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASx0cK4KHoPn-RkjjQS6WbCV13mDJk9wM",
  authDomain: "reels-e153f.firebaseapp.com",
  projectId: "reels-e153f",
  storageBucket: "reels-e153f.appspot.com",
  messagingSenderId: "169895035531",
  appId: "1:169895035531:web:a67fb08c5e30c7e3a5ca8e",
  measurementId: "G-3QNWD7MTTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);
export const fstore = firestore;
export const database={
  users:collection(firestore,'users'),
  posts:collection(firestore,'posts'),
  comments:collection(firestore,'comments')
}
export const storage = getStorage(app);
