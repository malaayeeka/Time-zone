// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADExaRQ4M01AlNiUcZiB_AWPK1Onmv4kg",
  authDomain: "watch-cbb10.firebaseapp.com",
  projectId: "watch-cbb10",
  storageBucket: "watch-cbb10.firebasestorage.app",
  messagingSenderId: "1064140928019",
  appId: "1:1064140928019:web:9549eb7296b58d04387be6",
  measurementId: "G-4J9DVP214W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);