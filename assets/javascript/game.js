var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCounter = 0;
var loseCounter = 0;
var guessesLeft = 9;
var guessed = [];
var userInput = "";

function resetGame(){

    guessesLeft = 9;
    guessesLeftDisplay.textContent = guessesLeft;
    guessed = [];
    document.getElementById("guessed-html").innerHTML = guessed;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    // console.log("computer guess " + computerGuess);

}

var winDisplay = document.getElementById("wins-html");
var loseDisplay = document.getElementById("losses-html");
var guessesLeftDisplay = document.getElementById("guessesLeft-html");
var guessedDisplay = document.getElementById("guessed-html");

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// console.log("computer guess " + computerGuess);

winDisplay.textContent = winCounter;
loseDisplay.textContent = loseCounter;
guessesLeftDisplay.textContent = guessesLeft;

document.onkeyup = function(event){

    userInput = event.key;
    userInput.toLowerCase();
    // console.log(userInput);

    if (alphabet.includes(userInput) ){
    if (userInput == computerGuess){
        winCounter++;
        winDisplay.textContent = winCounter;
        resetGame();
    }else{

        if(!guessed.includes(userInput)){
        guessesLeft--;
        guessesLeftDisplay.textContent = guessesLeft;
        guessed.push(userInput);
        // console.log(guessed);
        }
        

        for(var i = 0; i < guessed.length; i++){
            // guessedDisplay.textContent = guessed;
            // document.append("guessed-html");
            // document.write(guessed[i] + "");
            document.getElementById("guessed-html").innerHTML = guessed;
        }
        
    }
    }
    

    if (guessesLeft === 0){
        loseCounter++;
        loseDisplay.textContent = loseCounter;
        resetGame();
    }

}