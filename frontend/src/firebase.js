// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final-project-5cbe7.firebaseapp.com",
  projectId: "final-project-5cbe7",
  storageBucket: "final-project-5cbe7.appspot.com",
  messagingSenderId: "534624808868",
  appId: "1:534624808868:web:4edc106f4fd1ff16f15b31",
  measurementId: "G-4TZ0G7ZTN8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
