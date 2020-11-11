/**
 * Guess The Number Game
 * Done: Get user value from input and save it to variable numberGuess
 * Done: Generate a random number 1 to 100 and save it to variable correctNumber
 * Done: Console whether the guess is too high, too low, or is correct inside playGame function
 * Done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * Done: Complete the showYouWon, showNumberAbove, showNumberBelow
 * Done: Use the showYouWon... functions within displayResult to display the correct dialog
 * Done: Save the guess history in a variable called guess
 * Done: Display the guess history using displayHistory() function
 * Done: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
let guesses = [];
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
   displayResult(numberGuess);
   saveGuessHistory(numberGuess);
   displayHistory();
}
 

function displayResult(numberGuess)
 {
  if(numberGuess < correctNumber)
  {
    console.log(" Your number is too low");
    showNumberBelow();
  }
  else if(numberGuess >correctNumber)
  {
    console.log(" Your number is too high");
     showNumberAbove();
  }

  else
  {
    console.log(" Your number is exact");
   showYouWon();
  }
}
 


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame()
{
   correctNumber = getRandomNumber();
   document.getElementById("result").innerHTML = " ";
   guesses = [];
   displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  let randomNumber = Math.floor(Math.random()*100)+1;
   return randomNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
 guesses.push(guess);
 console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length-1; // TODO
  let list = "<ul class='list-group'>";
  while(index >=0)
  {
    list += "<li class='list-group-item'>" +"You Guessed "
    +guesses[index] + "</li>";
    index--;
  }
  
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}


function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won',text);
  
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  
  let dialog = getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}
