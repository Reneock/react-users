import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFuRy5PcrMtSzSMY4HyA8KfU6-NcT-Sig",
  authDomain: "react-users-7b453.firebaseapp.com",
  projectId: "react-users-7b453",
  storageBucket: "react-users-7b453.appspot.com",
  messagingSenderId: "94086925453",
  appId: "1:94086925453:web:686c3ede77bea59d7a26c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);