window.alert("Click the headings/subheadings to hear about that topic!")

let what = document.querySelector("#title");
let admin = document.querySelector("#admin");
let body = document.querySelector("#body");
let brain = document.querySelector("#brain");
let short = document.querySelector("#short");
let long = document.querySelector("#long");
let treatment = document.querySelector("#treat");
let funfact = document.querySelector("#fun");

what.addEventListener("click", function () {
    var snd = new Audio("audio/What.m4a");
    snd.play();
    snd.currentTime=0;
});

admin.addEventListener("click", function () {
    var snd = new Audio("audio/Administered.m4a");
    snd.play();
    snd.currentTime=0;
});

body.addEventListener("click", function () {
    var snd = new Audio("audio/Effectsbody.m4a");
    snd.play();
    snd.currentTime=0;
});

brain.addEventListener("click", function () {
    var snd = new Audio("audio/Effectsbrain.m4a");
    snd.play();
    snd.currentTime=0;
});

short.addEventListener("click", function () {
    var snd = new Audio("audio/Short-term.m4a");
    snd.play();
    snd.currentTime=0;
});

long.addEventListener("click", function () {
    var snd = new Audio("audio/Long-term.m4a");
    snd.play();
    snd.currentTime=0;
});

treatment.addEventListener("click", function () {
    var snd = new Audio("audio/Treatment.m4a");
    snd.play();
    snd.currentTime=0;
});

funfact.addEventListener("click", function () {
    var snd = new Audio("audio/Funfact.m4a");
    snd.play();
    snd.currentTime=0;
});