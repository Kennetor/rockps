import { Link } from "react-router-dom";
// Contexts
import { useEffect, useState, useContext } from "react";
import ScoreContext from "../contexts/ScoreContext";
// Components
import Paper from "./paper";
import Rock from "./rock";
import Scissors from "./scissors";
import Modal from "./modal";
import DetermineOutcome from "./determineOutcome";

<DetermineOutcome />;

function RockVersus() {
  const [random, setRandom] = useState(0);
  const [countdown, setCountdown] = useState(1);
  const { updateScore } = useContext(ScoreContext);
  const [outcome, setOutcome] = useState(null);
  const userChoice = "rock";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(intervalId);
      const r = Math.floor(Math.random() * 3);
      setRandom(r);
      let randomChoice;
      if (r === 0) {
        randomChoice = "paper";
      } else if (r === 1) {
        randomChoice = "rock";
      } else {
        randomChoice = "scissors";
      }
      setOutcome(DetermineOutcome(userChoice, randomChoice));
      console.log(`PLAYER PICKED: ${userChoice} \nNPC PICKED: ${randomChoice}`);
    }

    return () => clearInterval(intervalId);
  }, [countdown]);

  useEffect(() => {
    if (outcome !== null && outcome !== "draw") {
      updateScore(outcome);
    }
  }, [outcome]);

  return (
    <>
      <div className="xl:mt-0 -mt-14">
        <div className="fixed left-12 xl:right xl:scale-150 xl:left-96 top-72 xl:top-[30rem]">
          <h1>You Picked</h1>
          <Rock />
        </div>
        <Link to="/">
          <button className="absolute bottom-28 left-32 xl:left-[40rem] xl:bottom-44 xl:scale-150">
            Play Again!
          </button>
        </Link>
        <div className="fixed right-12 xl:right xl:scale-150 xl:right-96 top-72 xl:top-[30rem]">
          <h1>The House Picked</h1>
          {countdown > 0 ? <div>{countdown}</div> : null}

          <div>
            {countdown === 0 ? (
              random === 0 ? (
                <Paper />
              ) : random === 1 ? (
                <Rock />
              ) : (
                <Scissors />
              )
            ) : null}
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}
export default RockVersus;
