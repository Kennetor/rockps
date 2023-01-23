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
export function OutcomeMessage(props) {
  return (
    <div className="text-5xl mt-20 fixed bottom-80 left-1/2 xl:-translate-x-2 xl:-translate-y-16 translate-y-10 -translate-x-1/2 xl:right-96 xl:top-[30rem] xl:left-96">
      {props.outcome === "win" ? (
        <div>You Win!</div>
      ) : props.outcome === "lose" ? (
        <div>You Lose</div>
      ) : props.outcome === "draw" ? (
        <div>Draw</div>
      ) : null}
    </div>
  );
}
export default DetermineOutcome;
