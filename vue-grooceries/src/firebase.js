// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiH0-tjL0xssuQmJQUEmeKUBsZbBQhVC4",
  authDomain: "proyectofinalm7.firebaseapp.com",
  projectId: "proyectofinalm7",
  storageBucket: "proyectofinalm7.appspot.com",
  messagingSenderId: "251214276011",
  appId: "1:251214276011:web:136bc4c60472441d2e5eee",
  measurementId: "G-E4SGREKT00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);