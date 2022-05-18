import {
    loginInput,
    passwordInput,
    loginButton,
    wrongEmail,
    wrongPassword,
    noUser
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
    console.log(loginInput.value)
    const loginEmail = loginInput.value;
    localStorage.setItem('name',loginEmail);
    const loginPassword = passwordInput.value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
        window.location.href = 'html/LoggedPage.html';
    } catch (error) {
        let errorType = error.code;
        if (errorType === 'auth/invalid-email') {
            loginInput.setAttribute('class', 'error');
            wrongEmail.removeAttribute('hidden');
            noUser.setAttribute('hidden',true);
            console.log(error);
        } else if (errorType === 'auth/wrong-password') {
            passwordInput.setAttribute('class', 'error');
            wrongPassword.removeAttribute('hidden');
            noUser.setAttribute('hidden',true);
            console.log(error);
        } else {
            passwordInput.removeAttribute('class');
            loginInput.removeAttribute('class');
            wrongEmail.setAttribute('hidden', true);
            wrongPassword.setAttribute('hidden', true);
            noUser.removeAttribute('hidden');
            console.log(error);
        }
    }
}
loginButton.addEventListener("click", loginEmailPassword);