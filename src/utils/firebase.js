// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxBo-QYhmziZybKrAQV9kD0vHjrhcuNbg",
  authDomain: "netflixgpt-ced6d.firebaseapp.com",
  projectId: "netflixgpt-ced6d",
  storageBucket: "netflixgpt-ced6d.appspot.com",
  messagingSenderId: "69072461823",
  appId: "1:69072461823:web:0a8e06a698a9db8c3811ca",
  measurementId: "G-162XZ12VS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();