function DetermineOutcome({ randomChoice, outcome }) {
  switch (randomChoice) {
    case "rock":
      return <Rock />;
    case "paper":
      return <Paper />;
    case "scissors":
      return <Scissors />;
    default:
      return null;
  }
}
export function OutcomeMessage(props) {
  return (
    <div className="text-5xl">
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
