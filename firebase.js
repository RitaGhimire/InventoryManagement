// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-CHEg-D0Hg05a-OwS_RJ7MZxHt67K-lQ",
  authDomain: "inventory-4f71d.firebaseapp.com",
  projectId: "inventory-4f71d",
  storageBucket: "inventory-4f71d.appspot.com",
  messagingSenderId: "1092960847380",
  appId: "1:1092960847380:web:10f24dab58ebfc30f40901",
  measurementId: "G-5RR6J2FPXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {firestore}