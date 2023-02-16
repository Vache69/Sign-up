const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const input3 = document.querySelector(".input-3");
const input4 = document.querySelector(".input-4");

const errorIcon1 = document.querySelector(".error-1");
const errorIcon2 = document.querySelector(".error-2");
const errorIcon3 = document.querySelector(".error-3");
const errorIcon4 = document.querySelector(".error-4");

const errorText1 = document.querySelector(".p-1");
const errorText2 = document.querySelector(".p-2");
const errorText3 = document.querySelector(".p-3");
const errorText4 = document.querySelector(".p-4");

const claimBtn = document.querySelector(".claim-btn");
const trialBtn = document.querySelector(".trial-btn");


claimBtn.addEventListener("click", ValidateEmail);
trialBtn.addEventListener("click", ValidateEmail);

function ValidateEmail() {

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input1.value === "") {
        errorIcon1.style.display = "block";
        errorText1.style.display = "block";
    }

    if (input2.value === "") {
        errorIcon2.style.display = "block";
        errorText2.style.display = "block";
    } 

    if (input4.value === "") {
        errorIcon4.style.display = "block";
        errorText4.style.display = "block";
    }

    if (input3.value === "") {
        errorIcon3.style.display = "block";
        errorText3.style.display = "block";
    }

    if (input3.value.match(mailformat)) {
        console.log("Valid");
    } else {
        errorIcon3.style.display = "block";
        errorText3.style.display = "block";
    }
}