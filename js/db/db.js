import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    get,
    update

} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

import {
    emailInput,
    loginInput,
    saveRecord,
    plantingTime
}from "../general.js";

const firebaseConfig = {
    apiKey: "AIzaSyCvNXMqD2ECognWC1os7G9bjfmnKYTIIjo",
    authDomain: "forrest-3bbe4.firebaseapp.com",
    projectId: "forrest-3bbe4",
    storageBucket: "forrest-3bbe4.appspot.com",
    messagingSenderId: "476307898392",
    appId: "1:476307898392:web:956d084e4fcec74cfa436d",
    measurementId: "G-9JTFNTRRMK"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let hh = String(today.getHours()).padStart(2, '0');;
let min = String(today.getMinutes()).padStart(2, '0');;
today = mm + '/' + dd + '/' + yyyy + " " + hh + ":" + min;


const updateUserData = async() =>{
    const userMail = localStorage.getItem("name").replace(".", "");
    const updateRef = ref(db, "users/" + userMail)
    update(updateRef,{
        minutes: plantingTime.value.toString(),
        date: today.toString()
    });
}

saveRecord.addEventListener("click",updateUserData);
