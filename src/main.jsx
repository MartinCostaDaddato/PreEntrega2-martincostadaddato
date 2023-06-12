import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxz5O6Rnuu_fPLHMuFp148KTeM4UOD1r4",
  authDomain: "bagues-ecommerce-mcd.firebaseapp.com",
  projectId: "bagues-ecommerce-mcd",
  storageBucket: "bagues-ecommerce-mcd.appspot.com",
  messagingSenderId: "189966586709",
  appId: "1:189966586709:web:f2a7a71fb2459a2c59d5dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
