import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlb_1uZk05Lip9qVd4pMLhAoace1wOekM",
  authDomain: "where-s-waldo-ab5ff.firebaseapp.com",
  projectId: "where-s-waldo-ab5ff",
  storageBucket: "where-s-waldo-ab5ff.appspot.com",
  messagingSenderId: "132957821806",
  appId: "1:132957821806:web:47eaf0d1a5b6fc4ab6bf7f",
  measurementId: "G-YQP00DXRB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
