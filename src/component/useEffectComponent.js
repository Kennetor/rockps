// import { useEffect } from "react";
// import DetermineOutcome from "./determineOutcome";
// import ScoreContext from "../contexts/ScoreContext";
// <UseEffectComponent />;

// const UseEffectComponent = ({
//   countdown,
//   setCountdown,
//   random,
//   setRandom,
//   outcome,
//   setOutcome,
//   userChoice,
// }) => {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCountdown(countdown - 1);
//     }, 1000);

//     if (countdown === 0) {
//       clearInterval(intervalId);
//       const r = Math.floor(Math.random() * 3);
//       setRandom(r);
//       let randomChoice;
//       if (r === 0) {
//         randomChoice = "paper";
//       } else if (r === 1) {
//         randomChoice = "rock";
//       } else {
//         randomChoice = "scissors";
//       }
//       setOutcome(DetermineOutcome(userChoice, randomChoice));
//       console.log("NPC PICKED: ", randomChoice);
//     }

//     return () => clearInterval(intervalId);
//   }, [countdown]);

//   const { updateScore } = useContext(ScoreContext);

//   useEffect(() => {
//     if (outcome !== null && outcome !== "draw") {
//       updateScore(outcome);
//     }
//   }, [outcome]);

//   return null;
// };
// export default UseEffectComponent;
