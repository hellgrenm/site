//import * as gameLogic from "./hangmanGameLogic.js";
import {getWord} from "./word.js";
import {HangmanGame} from "./hangmanGameLogic.js";

let currentGame: HangmanGame;

document.addEventListener("DOMContentLoaded", function(){

    const introText = document.getElementById("introText") as HTMLDivElement;
    const h1 = introText.querySelector("h1") as HTMLHeadingElement;
    const cursor = document.getElementById("cursor") as HTMLDivElement;
    h1.addEventListener("mousemove", blurr);

    h1.addEventListener("mouseenter", function() {
        cursor.style.display = "block";
    });

    h1.addEventListener("mouseleave", function() {
        cursor.style.display = "none";
    });
    newGame();

});



function createLetter() : void{
    const letterDiv = document.querySelector(".letters") as HTMLDivElement;

    for (let i = 65; i <= 91; i++){
        if (i == 91){
            const spanEle = document.createElement("span");
            spanEle.textContent = "New game"
            spanEle.addEventListener("click", newGame);
            letterDiv.appendChild(spanEle);
        return;
        }  
        const spanEle = document.createElement("span");
        spanEle.textContent = String.fromCharCode(i);
        spanEle.addEventListener("click", guess );
        letterDiv.appendChild(spanEle);
    }

}

function guess(e: MouseEvent): void {
    const target = e.currentTarget as HTMLSpanElement;

    // Stoppa klick om spelet är slut
    if (target.classList.contains("disabled") || currentGame.isGameOver() || currentGame.checkWin()) {
        return;
    }

    const guess = target.textContent;
    currentGame.attemp(guess);

    const spanText = document.querySelector("#gameText") as HTMLSpanElement;
    spanText.textContent = currentGame.getBlanked();


    setPicture(currentGame.getAttempts());


    if (currentGame.checkWin()) {
        spanText.textContent = "YOU WIN"
        return;
    }


    if (currentGame.isGameOver()) {
       spanText.textContent = "You lose. The word was " + currentGame.getWord();
        return;
    }

    target.classList.add("disabled");
}



   function setPicture(id : number){
            const pictures = [
            "./images/hangman0.png",
            "./images/hangman1.png",
            "./images/hangman2.png",
            "./images/hangman3.png",
            "./images/hangman4.png",
            "./images/hangman5.png",
            "./images/hangman6.png",
            "./images/hangman7.png",
        ];
    
        const imgSrc = pictures[id];
        const image = document.getElementById("gamePicture") as HTMLImageElement;
        image.setAttribute("src", imgSrc);
    }


function newGame(): void {
    currentGame = new HangmanGame(getWord());
    const spanText = document.querySelector("#gameText") as HTMLSpanElement;
    const letterDiv = document.querySelector(".letters") as HTMLDivElement;
    letterDiv.innerHTML = "";
    createLetter();
    spanText.textContent = currentGame.getBlanked();
    console.log("WORD IS " + currentGame.getWord());
    setPicture(currentGame.getAttempts());
}

function blurr(e: MouseEvent): void {
    const h1 = document.querySelector("h1") as HTMLHeadingElement;
    const cursor = document.getElementById("cursor") as HTMLDivElement;
    const rect = h1.getBoundingClientRect();

    cursor.style.left = (e.clientX - rect.left - 50) + 'px';
    cursor.style.top = (e.clientY - rect.top - 40) + 'px';
}