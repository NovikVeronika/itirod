import {
    loginInput,
    emailInput,
    passwordInput,
    signUpButton,
    wrongEmail,
    weakPassword,
    wrongData, plantingTime
} from "./general.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    get

} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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
const db = getDatabase(app);

const auth = getAuth(app);

const createAccount = async () => {
    const regLogin = emailInput.value;
    const regEmail = loginInput.value;
    const regPassword = passwordInput.value;
    const userMail = regEmail.replace(".", "")
    set(ref(db,'users/' + userMail), {
        email: userMail,
        login: regLogin
    });
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
        console.log(userCredential.user);
        window.location.href = '../index.html';
    } catch (error) {
        let errorType = error.code;
        if (errorType === "auth/invalid-email"){
            passwordInput.removeAttribute("class");
            loginInput.setAttribute("class","error");
            wrongEmail.removeAttribute("hidden");
            console.log(error);
        }
        else if (errorType === "auth/weak-password"){
            loginInput.removeAttribute("class");
            wrongEmail.setAttribute("hidden", true);
            passwordInput.setAttribute("class","error");
            weakPassword.removeAttribute("hidden");
            wrongData.setAttribute("hidden", true);
            console.log(error);
        }
        else
            wrongData.removeAttribute("hidden")
        console.log(error);
    }
}
signUpButton.addEventListener("click", createAccount);
