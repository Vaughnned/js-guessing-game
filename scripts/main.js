(function () {
  "use strict";

  function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
  }

  function checkGuess(guess) {
    if (guess === randomNumber) {
      return true;
    }

    return false;
  }

  // Define a function (closure) to keep track of the number of guesses
  function incrementAttempts() {
    let numAttempts = 0;
    return function () {
      return ++numAttempts;
    };
  }

  //Define a function to handle the user's guess
  function handleGuess() {
    const userGuess = parseInt(prompt("Guess a number between 1 and 10"));
    const numberOfGuesses = countAttempts();

    if (checkGuess(userGuess)) {
      alert(
        `Yay! You guessed the number in ${numberOfGuesses} tries. The number is ${randomNumber}`
      );
    } else {
      alert(`Nope! Try again!`);
      handleGuess();
    }
  }

  // Generate a random number and execute function to track number of functions
  const randomNumber = generateRandomNumber();
  const countAttempts = incrementAttempts();

  //Add an event listener to the buttontha calls the guess handler function when clicked
  document.querySelector("button").addEventListener("click", handleGuess());
})();
