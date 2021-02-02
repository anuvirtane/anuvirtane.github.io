
//lisää nappien toiminnot
document.getElementById("zero-btn").addEventListener("click", addZeroClick);
document.getElementById("one-btn").addEventListener("click", addOneClick);

//hae elementit, joissa tiedot näytetään
let computerChoice = document.getElementById("tietokoneen-val");
let userChoice = document.getElementById("sun-val");
let computerWins = document.getElementById("tietokoneen-voitot");
let userWins = document.getElementById("sun-voitot");

//käyttäjän arvauslista
let guessList = [];



//tietokoneen arvaus
let guessFromComputer;

//voittomuuttujat
computerWon = 0;
userWon = 0;

//nollanappi
function addZeroClick() {
    
 guessList.push(0);
 generateGuess();
}

//ykkösnappi
function addOneClick()  {
guessList.push(1);
generateGuess();
}

function generateGuess() {

     //tietokoneen eka arvaus 
     if(guessList.length===1){
        guessFromComputer = 1;
    }
    //vertaillaan käyttäjän arvauksia ja tietokone arvaa niiden perusteella
    else if (guessList[guessList.length-1] === guessList[guessList.length-2]) {
        guessFromComputer = guessList[guessList.length-2];
    } else {
        guessFromComputer = computerGuessesBetter();
    }


    //näytetään arvaukset html:ssä
    computerChoice.innerText = guessFromComputer;
    userChoice.innerText = guessList[guessList.length-1]
 
    calculateResult(guessFromComputer, guessList[guessList.length-1] );

    
}

function computerGuessesBetter(){
    //painaako käyttäjä vuorotellen 1 ja 0?
    if  ((guessList[guessList.length-1] ===1 && guessList[guessList.length-2] ===0 ) || (guessList[guessList.length-1] ===0 && guessList[guessList.length-2] ===1)) {
         return guessList[guessList.length-3];
    }
     else {
        return 0;
}}

function calculateResult(computerGuessed, userGuessed) {
    if (computerGuessed === userGuessed) {
        computerWon++;
        computerWins.innerText = computerWon;
    } else {
        userWon++;
        userWins.innerText = userWon;
    }
    
} 