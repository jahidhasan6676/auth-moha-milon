// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCujTFZT5bSoyAKHBdGOI53Dyh6ADa0kM",
  authDomain: "auth-moha-milon-76478.firebaseapp.com",
  projectId: "auth-moha-milon-76478",
  storageBucket: "auth-moha-milon-76478.firebasestorage.app",
  messagingSenderId: "2743434996",
  appId: "1:2743434996:web:d6335a07a882a2c5b8e8a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;