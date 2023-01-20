function DetermineOutcome(userChoice, randomChoice) {
  let result;
  if (userChoice === "rock") {
    if (randomChoice === "scissors") {
      result = "win";
    } else if (randomChoice === "paper") {
      result = "lose";
    } else if (randomChoice === "rock") {
      result = "draw";
    }
  } else if (userChoice === "paper") {
    if (randomChoice === "rock") {
      result = "win";
    } else if (randomChoice === "scissors") {
      result = "lose";
    } else if (randomChoice === "paper") {
      result = "draw";
    }
  } else if (userChoice === "scissors") {
    if (randomChoice === "paper") {
      result = "win";
    } else if (randomChoice === "rock") {
      result = "lose";
    } else if (randomChoice === "scissors") {
      result = "draw";
    }
  }
  return result;
}
export default DetermineOutcome;
