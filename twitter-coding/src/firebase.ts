import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNIw_Wc5ayBTF7Crusx1fMvD4moNrjujY",
    authDomain: "nwitter-reloaded-7878d.firebaseapp.com",
    projectId: "nwitter-reloaded-7878d",
    storageBucket: "nwitter-reloaded-7878d.firebasestorage.app",
    messagingSenderId: "811222264702",
    appId: "1:811222264702:web:6e31a12d3927890a24e12f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)