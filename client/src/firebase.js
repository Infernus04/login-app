// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey ,
  authDomain: "mern-auth-65acb.firebaseapp.com",
  projectId: "mern-auth-65acb",
  storageBucket: "mern-auth-65acb.appspot.com",
  messagingSenderId: "967042464580",
  appId: "1:967042464580:web:ffe6fca5a10795bcff3511"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);