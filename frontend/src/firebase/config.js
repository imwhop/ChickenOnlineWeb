// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBV4VW-DqDYMEn3dfRft9yOw4CkPr57_4c",
    authDomain: "chickenweb-9bf4f.firebaseapp.com",
    projectId: "chickenweb-9bf4f",
    storageBucket: "chickenweb-9bf4f.appspot.com",
    messagingSenderId: "729638417805",
    appId: "1:729638417805:web:009629cfdc11b665e379c4",
    measurementId: "G-QGFZRZLM8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👉 Thêm các dòng dưới
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
