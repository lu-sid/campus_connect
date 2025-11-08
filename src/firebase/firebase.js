import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7aqa0Nv1f_Uk-8Ooi-wc0JJngAh_AAh0",
  authDomain: "campus-connect-275cd.firebaseapp.com",
  projectId: "campus-connect-275cd",
  storageBucket: "campus-connect-275cd.firebasestorage.app",
  messagingSenderId: "784964839897",
  appId: "1:784964839897:web:c8484476052855c28891c8",
  measurementId: "G-YPRTQEDXEN"
};

// ✅ Initialize app FIRST
const app = initializeApp(firebaseConfig);

// ✅ Then export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Re-export auth functions
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};

export default app;
