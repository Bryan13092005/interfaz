
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCnl9j_YzG0L0yugWSbNg8R7-It07VH6jA",
    authDomain: "asociaciones-190e3.firebaseapp.com",
    projectId: "asociaciones-190e3",
    storageBucket: "asociaciones-190e3.firebasestorage.app",
    messagingSenderId: "593279288412",
    appId: "1:593279288412:web:d0b281e3119ebeb97a5299",
    measurementId: "G-6T8VVPYQYX"
};

const appFirebase = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(appFirebase)
export const authFirebase = getAuth();
export default appFirebase;
