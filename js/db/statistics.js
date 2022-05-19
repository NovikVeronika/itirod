import {
    db,
    userMail
} from "./db.js"

import {statisticsButton} from "../general.js";

import {
    ref,
    get,
    child,
    onValue

} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const scroll = document.getElementById("scrollmenu")
const inDiv = document.createElement('div')

const readRef = ref(db, "users/" + userMail + "/results/")
const result = [2];
onValue(readRef, (snapshot) => {
    snapshot.forEach((data) => {
        result[0] = data.val().minutes;
        result[1] = data.val().date;
    })
    console.log(result)
}).catch((error) => {
    console.error(error);
});


//statisticsButton.addEventListener("click",readUserData);
