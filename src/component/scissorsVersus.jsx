import { Link } from "react-router-dom";
import { useState } from "react";
// Components
import Modal from "./modal";
import DetermineOutcome, { OutcomeMessage } from "./determineOutcome";
import useEffectComponent from "./useEffectComponent";
import Rock, { Circle, Paper, Scissors, WinnerCircle } from "./choices";

<DetermineOutcome />;

function ScissorsVersus() {
  const [random, setRandom] = useState(0);
  const [countdown, setCountdown] = useState(1);
  const [outcome, setOutcome] = useState(null);
  const userChoice = "scissors";

  useEffectComponent({
    countdown,
    setCountdown,
    setRandom,
    outcome,
    setOutcome,
    userChoice,
  });

  return (
    <>
      <div className="xl:mt-0 -mt-14">
        <div className="fixed xl:-translate-x-[30rem] left-12 xl:right xl:scale-150 xl:left-1/2 top-72 xl:top-[30rem]">
          <h1 className="flex mr-12 justify-center xl:scale-150 ">
            You Picked
          </h1>
          <div>
            {countdown === 0 ? (
              random === 1 ? null : random === 2 ? null : (
                <div>
                  <WinnerCircle />
                </div>
              )
            ) : null}
          </div>
          <Scissors />
        </div>
        {countdown === 0 ? (
          <Link to="/">
            <div className="grid">
              <button className="animate-ProjectPopUp z-50 text-2xl absolute bottom-60 translate-y-16 left-24 xl:left-1/2 xl:-translate-y-64 xl:-translate-x-1/2 xl:bottom-44 w-52 xl:scale-150">
                Play Again!
              </button>
            </div>
          </Link>
        ) : null}
        <div className="fixed right-12 xl:right xl:scale-150 xl:right-96 top-72 xl:top-[30rem]">
          <h1 className="flex mr-6 justify-center xl:scale-150 ">
            The House Picked
          </h1>
          <div>
            {countdown > 0 ? <Circle /> : null}
            {countdown === 0 ? (
              random === 0 ? (
                <Paper />
              ) : random === 1 ? (
                <div>
                  <WinnerCircle />
                  <Rock />
                </div>
              ) : (
                <Scissors />
              )
            ) : null}
          </div>
        </div>
        <OutcomeMessage outcome={outcome} />
      </div>
      <Modal />
    </>
  );
}
export default ScissorsVersus;
