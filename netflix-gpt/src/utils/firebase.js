// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkoFi0qUQuA4-lEUgeDwDMP2Ng3jynuNY",
  authDomain: "netflix-gpt-d8031.firebaseapp.com",
  projectId: "netflix-gpt-d8031",
  storageBucket: "netflix-gpt-d8031.appspot.com",
  messagingSenderId: "574667482783",
  appId: "1:574667482783:web:6c8187ff1c7b134fb464aa",
  measurementId: "G-BCCTK0ZBQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// Steps for Deployment
// Email Address

// O. Install firebase CLI - pm install -g firebase-tools
// 41. Firebase Login - firebase login
// 2 Unitilize Firebase - firehase init, then select Hosting
// 3. Deploy command-
// firebase deploy
