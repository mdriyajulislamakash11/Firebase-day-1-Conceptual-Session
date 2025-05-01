// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_oG8nwFkzQhqPSiVJJnkgsty01Jm3K5s",
  authDomain: "fairebase-conceptual-session-1.firebaseapp.com",
  projectId: "fairebase-conceptual-session-1",
  storageBucket: "fairebase-conceptual-session-1.firebasestorage.app",
  messagingSenderId: "1047858146719",
  appId: "1:1047858146719:web:ea68a1a30b5eb20807a1aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);