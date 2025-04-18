// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "super-e840e.firebaseapp.com",
  projectId: "super-e840e",
  storageBucket: "super-e840e.firebasestorage.app",
  messagingSenderId: "1023207005128",
  appId: "1:1023207005128:web:fb6436011649bd3c6afefd",
  measurementId: "G-2J954LKC92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
