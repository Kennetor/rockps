import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Paper from "./paper";
import Rock from "./rock";
import Scissors from "./scissors";
import Modal from "./modal";
import ScoreContext from "../contexts/ScoreContext";

function PaperVersus() {
  const [random, setRandom] = useState(0);
  const [countdown, setCountdown] = useState(1);
  const { updateScore } = useContext(ScoreContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(intervalId);
      setRandom(Math.floor(Math.random() * 3));
    }
    return () => clearInterval(intervalId);
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      if (random === 1) {
        updateScore("draw");
      } else if (random === 2) {
        updateScore("lose");
      } else {
        updateScore("win");
      }
    }
  }, [countdown, random]);

  return (
    <>
      <div className="xl:mt-0 -mt-14">
        <div className="fixed left-12 xl:scale-150 xl:left-96 top-72 xl:top-[30rem]">
          <h1>You Picked</h1>
          <Paper />
        </div>
        <Link to="/">
          <button className="absolute bottom-32 left-36 xl:left-[40rem] xl:bottom-44 xl:scale-150">
            Play Again!
          </button>
        </Link>
        <div className="fixed right-12 xl:right xl:scale-150 xl:right-96 top-72 xl:top-[30rem]">
          <h1>The House Picked</h1>
          {countdown > 0 ? <div>{countdown}</div> : null}

          <div>
            {countdown === 0 ? (
              random === 1 ? (
                <Paper />
              ) : random === 2 ? (
                <Rock />
              ) : (
                <Scissors />
              )
            ) : null}
          </div>
          {countdown === 0 && random === 2 ? updateScore(1) : null}
          {countdown === 0 && random === 1 ? updateScore(-1) : null}
          {countdown === 0 && random === 0 ? updateScore(0) : null}
        </div>
      </div>

      <Modal />
    </>
  );
}
export default PaperVersus;
