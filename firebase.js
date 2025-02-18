// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnBwJsZLrJgdbyuHRZsbjckwUMONwV0yM",
  authDomain: "marvel-ai-451218.firebaseapp.com",
  projectId: "marvel-ai-451218",
  storageBucket: "marvel-ai-451218.firebasestorage.app",
  messagingSenderId: "983313729323",
  appId: "1:983313729323:web:3db79c5c13592b24c9676e",
  measurementId: "G-E72F9BFH16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);