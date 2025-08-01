import { initializeApp } from "firebase/app";
import { getAnalytics, GoogleAuthProvider } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD_pgwrlhmHHQn5gSVfDjKjZdSvIBSZCeM",
  authDomain: "workbackground-7417e.firebaseapp.com",
  databaseURL: "https://workbackground-7417e-default-rtdb.firebaseio.com",
  projectId: "workbackground-7417e",
  storageBucket: "workbackground-7417e.firebasestorage.app",
  messagingSenderId: "293182868271",
  appId: "1:293182868271:web:5957ca29919a7851f6afda",
  measurementId: "G-EXG586QVGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleprovider = new GoogleAuthProvider();
