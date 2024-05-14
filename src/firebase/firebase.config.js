// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3lBsrg2LOccPtkmInad4iM669rFylUlY",
  authDomain: "book-store-caa1f.firebaseapp.com",
  projectId: "book-store-caa1f",
  storageBucket: "book-store-caa1f.appspot.com",
  messagingSenderId: "858558761856",
  appId: "1:858558761856:web:0d50d9a01237c107920f65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;