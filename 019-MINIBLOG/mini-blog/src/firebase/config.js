// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore }from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTk2qeSvnE-N21KaJnYEg4CSII4fVOI-U",
  authDomain: "miniblog-c5fa3.firebaseapp.com",
  projectId: "miniblog-c5fa3",
  storageBucket: "miniblog-c5fa3.appspot.com",
  messagingSenderId: "868440694275",
  appId: "1:868440694275:web:7299f882ff7581b9b83836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)