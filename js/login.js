import {
    loginInput,
    passwordInput,
    loginButton
}from "./general.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {
    getAuth,
    // connectAuthEmulator,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCvNXMqD2ECognWC1os7G9bjfmnKYTIIjo",
    authDomain: "forrest-3bbe4.firebaseapp.com",
    projectId: "forrest-3bbe4",
    storageBucket: "forrest-3bbe4.appspot.com",
    messagingSenderId: "476307898392",
    appId: "1:476307898392:web:956d084e4fcec74cfa436d",
    measurementId: "G-9JTFNTRRMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099/%22);
const loginEmailPassword = async () => {
    const loginEmail = loginInput.value;
    localStorage.setItem('name',loginEmail);
    const loginPassword = passwordInput.value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
        window.location.href = '../html/LoggedPage.html';
    } catch (error) {
        console.log(error);
    }
}
loginButton.addEventListener("click", loginEmailPassword);