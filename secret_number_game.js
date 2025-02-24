document.getElementById("startGameButton").onclick = () => {
  let userScore = 0;
  let userTries = 5;
  const secretNumber = 7;

  let guess = prompt(
    "Hello User! Welcome to the secret number guessing game! Please enter a number from 1 to 10!"
  );
  guess = parseInt(guess);

  while (isNaN(guess)) {
    guess = prompt("That's not a number! What's a number from 1 to 10?");
    guess = parseInt(guess);
  }

  while (userScore < 50 && userTries > 0) {
    if (guess === secretNumber) {
      userScore += 50;
      if (userScore === 50) {
        alert(
          "YOU DID IT! YOU REACHED 50 POINTS! YOU WIN! YOU ARE OUR NEW CHAMPION!"
        );
        break;
      }
    } else {
      userTries -= 1;
      alert(
        `I am sorry but that is not the correct number! You have ${userTries} tries left. Will you guess the secret number before you run out of attempts?`
      );
      if (userTries === 0) {
        alert("YOU LOSE, GOOD DAY SIR!");
        break;
      }
    }

    // Prompt the user for another guess
    guess = prompt("Please enter a number from 1 to 10!");
    guess = parseInt(guess);
    while (isNaN(guess)) {
      guess = prompt("That's not a number! What's a number from 1 to 10?");
      guess = parseInt(guess);
    }
  }
};
