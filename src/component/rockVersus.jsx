import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Paper from "./paper";
import Rock from "./rock";
import Scissors from "./scissors";
import Modal from "./modal";

function RockVersus() {
  const [random, setRandom] = useState(0);
  const [countdown, setCountdown] = useState(1);

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