//Mario Kart
"use strict";


//Global Variables
let numbullet = 0;
let numshell = 0;
let numbanana = 0;
let numgolden = 0;
let numstar = 0;
document.getElementById("items").addEventListener("click", standard);
 document.getElementById("hundred").addEventListener("click", xtreme);
 document.getElementById("five").addEventListener("click", billy);

//Event Fuction
function standard() {
    // Get Value of Input Element - Position
let place = Number(document.getElementById("racepos").value)
let randNum = Math.random();

    
    if (  place >= 1 && place <= 6) {
        // Postion 1 - 6 Probabilities
        if (randNum < 0.45) {
            document.getElementById("results").innerHTML += "<img src=images/banana.jpg>";
            numbanana++
            document.getElementById("raw-banana").innerHTML = numbanana;
        } else if (randNum < 0.80) {
            document.getElementById("results").innerHTML += "<img src=images/greenshell.jpg>";
            numshell++
            document.getElementById("raw-shell").innerHTML = numshell;
        } else if (randNum < 0.95) {
            document.getElementById("results").innerHTML += "<img src=images/star.jpg>";
            numstar++
            document.getElementById("raw-star").innerHTML = numstar;
        } else if (randNum < 0.99) {
            document.getElementById("results").innerHTML += "<img src=images/golden.jpg>";
            numgolden++
            document.getElementById("raw-golden").innerHTML = numgolden;
        } else {
            document.getElementById("results").innerHTML += "<img src=images/bullet.jpg>";
            numbullet++
            document.getElementById("raw-bullet").innerHTML = numbullet;
        }
    } else if (place >= 7 && place <= 12) {
        // Positions 7 - 12
        if (randNum < 0.05) {
            document.getElementById("results").innerHTML += "<img src=images/banana.jpg>";
            numbanana++
            document.getElementById("raw-banana").innerHTML = numbanana;
        } else if (randNum < 0.1) {
            document.getElementById("results").innerHTML += "<img src=images/greenshell.jpg>";
            numshell++
            document.getElementById("raw-shell").innerHTML = numshell;
        } else if (randNum < 0.35) {
            document.getElementById("results").innerHTML += "<img src=images/star.jpg>";
            numstar++
            document.getElementById("raw-star").innerHTML = numstar;
        } else if (randNum < 0.7) {
            document.getElementById("results").innerHTML += "<img src=images/golden.jpg>";
            numgolden++
            document.getElementById("raw-golden").innerHTML = numgolden;
        } else {
            document.getElementById("results").innerHTML += "<img src=images/bullet.jpg>";
            numbullet++
            document.getElementById("raw-bullet").innerHTML = numbullet;
        }

    }
}

function xtreme() {

for(let n =0; n <100; n++){

    standard();


}




}


function billy(){

  while (numbullet < 5) {

    standard();
    
}





}