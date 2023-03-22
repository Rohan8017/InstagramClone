// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore,collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9J5nitN7usEA66czueJgFTGX7K1CeOjM",
  authDomain: "instagram-reels-e46ec.firebaseapp.com",
  projectId: "instagram-reels-e46ec",
  storageBucket: "instagram-reels-e46ec.appspot.com",
  messagingSenderId: "739270975859",
  appId: "1:739270975859:web:341f819377bb4cdc1a2506"
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
