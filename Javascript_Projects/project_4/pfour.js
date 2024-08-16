let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector(".guessSubmit");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remainingAttempts = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  //console.log(transaction);

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

//validate guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("enter a valid number");
  } else if (guess < 1 && guess > 100) {
    alert("input range is 1 to 100");
  } else {
    if (numGuess === 5) {
      displayGuess(guess);
      displayMessage(
        `please start over, you have used all the attempts, random number is ${randomNumber}`
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//check guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is high`);
  }
}

//display guess
function displayGuess(guess) {
  userInput.value = "";
  remainingAttempts.innerHTML = `${5 - numGuess}`;
  numGuess++;
}

//display message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

//end game
function endGame() {
  userInput.value = "";
  submit.disabled = true;
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

//start new game
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = [];
    numGuess = 1;
    //guessSlot.innerHTML = "";
    remainingAttempts.innerHTML = `5`;
    submit.disabled = false;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
