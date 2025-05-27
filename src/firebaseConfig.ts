import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAknz2PN5LoAVDWMs-Q37Lu6D3kQKFliZs",
  authDomain: "secrataryapp.firebaseapp.com",
  projectId: "secrataryapp",
  storageBucket: "secrataryapp.firebasestorage.app",
  messagingSenderId: "1064073748079",
  appId: "1:1064073748079:web:75119a1d8ad865b00d379a",
  measurementId: "G-MDCKCYWD8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore :3
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
