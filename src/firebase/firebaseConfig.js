import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCvniD1bL4Ugjn1Qp5dOqkXgmModWtLxw8",
  authDomain: "mi-app-coder.firebaseapp.com",
  projectId: "mi-app-coder",
  storageBucket: "mi-app-coder.appspot.com",
  messagingSenderId: "522126253342",
  appId: "1:522126253342:web:535e6459a11389d235bd0f"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)