
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


function twoSameGuessesInRow(){
    if (guessList[guessList.length-3] === guessList[guessList.length-2]) {
       
        return true;
        
    } else {
       
        return false;
    }
}

function previouslyTwoSameGuessesInRow() {
    if (guessList[guessList.length-5] === guessList[guessList.length-4]) {
        return true;
    } else {
        return false;
    }
}

function twoSameGuessesInRowAndChange() {
    if ((guessList[guessList.length-3]===guessList[guessList.length-4]) && (guessList[guessList.length-2] !== guessList[guessList.length-3])) {
      
        return true;
    } else {
        return false;
    }
}

function twoSameAndTwoSameGuessesInRow(){
    if (twoSameGuessesInRow() && previouslyTwoSameGuessesInRow()) {
      
        return true;
    } else if (twoSameGuessesInRowAndChange()) {
        
        return true;
    } else {
       
        return false;
    }
    
}


function generateGuess() {
   
    return Math.round(Math.random());
    
}

function showResults() {
    //näytetään arvaukset html:ssä
    computerChoice.innerText = guessFromComputer;
    userChoice.innerText = guessList[guessList.length-1];
 
    calculateResult(guessFromComputer, guessList[guessList.length-1] );
}

function zeroOneZeroOne(){
    //painaako käyttäjä vuorotellen 1 ja 0?
    if  (guessList[guessList.length-3] + guessList[guessList.length-2] ===1) {
      
         return true;
    }
     else {
      
        return false;
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

function findPatternAfterFiveClicks(){
    if (twoSameAndTwoSameGuessesInRow()){
        guessFromComputer = guessList[guessList.length-5];
            showResults();
        } else if (twoSameGuessesInRow()){
        guessFromComputer = guessList[guessList.length-2];
        showResults();
    } else {
        if  (zeroOneZeroOne()) {
          guessFromComputer = guessList[guessList.length-3];
          showResults();
        } else {
          guessFromComputer = guessList[guessList.length-2];
          showResults();
      }
    } 
}


function findPattern() {

    if (guessList.length>4){
        findPatternAfterFiveClicks();
    } else {
        guessFromComputer = generateGuess();
        showResults();
    }
    
}

//nollanappi
function addZeroClick() {
    
    guessList.push(0);
    findPattern();
   }
   
   //ykkösnappi
   function addOneClick()  {
   guessList.push(1);
   findPattern();
   }