import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    get,
    update,
    child,
    onValue

} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

import {
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
export const db = getDatabase(app);

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let hh = String(today.getHours()).padStart(2, '0');;
let min = String(today.getMinutes()).padStart(2, '0');;
today = mm + '/' + dd + '/' + yyyy + " " + hh + ":" + min;

export const userMail = localStorage.getItem("name").replace(".", "");
const result1 = today.toString().replaceAll("/", "-")


const updateUserData = async()=>{
    const updateRef = ref(db, "users/" + userMail + "/results/" + result1)
    update(updateRef, {
        minutes: plantingTime.value.toString(),
        date: today.toString()
    });
    //window.location.href='temp.html';
    saveRecord.removeEventListener("click", updateUserData);
}

saveRecord.addEventListener("click", updateUserData);

