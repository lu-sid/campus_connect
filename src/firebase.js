import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7aqa0Nv1f_Uk-8Ooi-wc0JJngAh_AAh0",
  authDomain: "campus-connect-275cd.firebaseapp.com",
  projectId: "campus-connect-275cd",
  storageBucket: "campus-connect-275cd.firebasestorage.app",
  messagingSenderId: "784964839897",
  appId: "1:784964839897:web:c8484476052855c28891c8",
  measurementId: "G-YPRTQEDXEN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
