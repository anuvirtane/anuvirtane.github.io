
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
 findPattern();
}

//ykkösnappi
function addOneClick()  {
guessList.push(1);
findPattern();
}

function twoSameGuessesInRow(){
    if (guessList[guessList.length-3] === guessList[guessList.length-2]) {
        console.log("two same guesses");
        return true;
        
    } else {
        console.log("not two same guesses");
        return false;
    }
}

function twoSameAndTwoSameGuessesInRow(){
    if ((twoSameGuessesInRow() && (guessList[guessList.length-5] === guessList[guessList.length-4])) ||(guessList[guessList.length-3]===guessList[guessList.length-4] !== guessList[guessList.length-2]))
 {  
    console.log("two same and two same guesses");
        return true;
    } else {
        console.log("NOT two same and two same guesses");
        return false;
    }
}

function findPattern() {


    if((guessList.length===1) || (guessList.length===2)) {
         
        guessFromComputer = generateGuess();
        showResults();

       
    }
    
    
    else if (guessList.length>4){
        if (twoSameAndTwoSameGuessesInRow()){
            guessFromComputer = guessList[guessList.length-5];
                showResults();}

          
        } else if (twoSameGuessesInRow()){
            guessFromComputer = guessList[guessList.length-2];
            showResults();
        }
        else {
          if  (zeroOneZeroOne()) {
              guessFromComputer = guessList[guessList.length-3];
              showResults();
          } else {
              guessFromComputer = guessList[guessList.length-2];
              showResults();
          }
        } 
    }

    
    
   


function generateGuess() {
   
    return Math.round(Math.random());
    
}

function showResults() {
    //näytetään arvaukset html:ssä
    computerChoice.innerText = guessFromComputer;
    userChoice.innerText = guessList[guessList.length-1]
 
    calculateResult(guessFromComputer, guessList[guessList.length-1] );
}

function zeroOneZeroOne(){
    //painaako käyttäjä vuorotellen 1 ja 0?
    if  (guessList[guessList.length-3] + guessList[guessList.length-2] ===1) {
        console.log("zero one zero one");
         return true;
    }
     else {
        console.log("NOT zero one zero one");
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