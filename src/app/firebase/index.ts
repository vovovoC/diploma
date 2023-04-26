// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDorMIqfbDRO6iQxNvO07kY8XtHVLs4bkk",
  authDomain: "qonys-c0460.firebaseapp.com",
  projectId: "qonys-c0460",
  storageBucket: "qonys-c0460.appspot.com",
  messagingSenderId: "258346697382",
  appId: "1:258346697382:web:21a4efb5a4eaab37ad2a67",
  measurementId: "G-B9EDQ1SDC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
