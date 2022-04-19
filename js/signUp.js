import {
    loginInput,
    emailInput,
    passwordInput,
    signUpButton
}from "./general.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {
    getAuth,
    // connectAuthEmulator,
    createUserWithEmailAndPassword
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

const createAccount = async () => {
    const regLogin = loginInput.value;
    const regEmail = emailInput.value;
    const regPassword = passwordInput.value;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
        console.log(userCredential.user);
        window.location.href = '../html/LoginPage.html';
    } catch (error) {
        console.log(error);
    }
}
signUpButton.addEventListener("click", createAccount);
