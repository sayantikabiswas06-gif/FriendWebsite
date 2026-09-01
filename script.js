/* =========================================
   GET ELEMENTS
   ========================================= */

const intro = document.getElementById("intro");
const flyingScene = document.getElementById("flyingScene");
const letterPage = document.getElementById("letterPage");
const opinionPage = document.getElementById("opinionPage");
const thankYouPage = document.getElementById("thankYouPage");

const handLetter = document.getElementById("handLetter");

const doneButton = document.getElementById("doneButton");
const sendButton = document.getElementById("sendButton");

const opinion = document.getElementById("opinion");
const count = document.getElementById("count");


/* =========================================
   STEP 1
   MAN WALKS TO POSTBOX
   ========================================= */

/*
   The man takes about 5 seconds to reach
   the postbox.

   After 5 seconds we start the next animation.
*/

setTimeout(function () {

    /*
       Hide the letter from his hand.
       This makes it look like he put it
       inside the postbox.
    */

    handLetter.style.opacity = "0";

}, 5000);


/* =========================================
   STEP 2
   LETTER FLIES OUT
   ========================================= */

setTimeout(function () {

    intro.classList.add("hidden");

    flyingScene.classList.remove("hidden");

}, 6500);


/* =========================================
   STEP 3
   OPEN LETTER
   ========================================= */

setTimeout(function () {

    flyingScene.classList.add("hidden");

    letterPage.classList.remove("hidden");

}, 9000);


/* =========================================
   STEP 4
   DONE READING
   ========================================= */

doneButton.addEventListener("click", function () {

    letterPage.classList.add("hidden");

    opinionPage.classList.remove("hidden");

});


/* =========================================
   STEP 5
   CHARACTER COUNT
   ========================================= */

opinion.addEventListener("input", function () {

    count.textContent = opinion.value.length;

});


/* =========================================
   STEP 6
   SEND OPINION
   ========================================= */

sendButton.addEventListener("click", function () {

    const userOpinion = opinion.value.trim();

    if (userOpinion === "") {

        alert("Please write your opinion first. 😊");

        return;

    }

    /*
       For now, we simply move to the
       thank-you page.

       Later we can connect this to a
       form service/backend so you can
       actually receive the opinion.
    */

    opinionPage.classList.add("hidden");

    thankYouPage.classList.remove("hidden");

});