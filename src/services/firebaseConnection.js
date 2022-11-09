import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDfqGDCKe2kQHcP39_9Etgrau9R9oAvqFI",
  authDomain: "devlinks-d46b5.firebaseapp.com",
  projectId: "devlinks-d46b5",
  storageBucket: "devlinks-d46b5.appspot.com",
  messagingSenderId: "811387072539",
  appId: "1:811387072539:web:c786188046a0dec48e08be",
  measurementId: "G-JC2NEYT6VW"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };