// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAavkjK50u29LHFFS4xm8adY5MNHcLuOWY",

  authDomain: "file-retrieval-2f017.firebaseapp.com",

  projectId: "file-retrieval-2f017",

  storageBucket: "file-retrieval-2f017.appspot.com",

  messagingSenderId: "148926537659",

  appId: "1:148926537659:web:8c17c9ffe4ee7332cd2e9e",

  measurementId: "G-V0KC5DQ4EV"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export default getFirestore();