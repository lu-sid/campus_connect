import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // (for future profile images etc)

// 🔥 Your Firebase configuration (Replace with your actual config)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7aqa0Nv1f_Uk-8Ooi-wc0JJngAh_AAh0",
  authDomain: "campus-connect-275cd.firebaseapp.com",
  projectId: "campus-connect-275cd",
  storageBucket: "campus-connect-275cd.firebasestorage.app",
  messagingSenderId: "784964839897",
  appId: "1:784964839897:web:c8484476052855c28891c8",
  measurementId: "G-YPRTQEDXEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
