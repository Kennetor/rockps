// CSS
import "../App.css";

// Images
import triangle from "../component/bg-triangle.svg";
// Components
import Paper from "./paper";
import Rock from "./rock";
import Scissors from "./scissors";
import Scoreboard from "./scoreboard";
import Modal from "./modal";
import { Link } from "react-router-dom";
function Game() {
  return (
    <>
      <div className="">
        {/* <Scoreboard /> */}
        {/* Choices */}
        <div className="xl:ml-20 xl:mt-20 xl:absolute xl:scale-110 top-56 left-40 mt-10">
          <img
            src={triangle}
            className="absolute left-10 xl:left-80 xl:top-44 xl:scale-150"
          />
          <div className="flex">
            <div className="relative -top-10 xl:left-60 xl:top-20 left-8 xl:scale-150">
              <Link to="/play">
                <Paper />
              </Link>
            </div>
            <div className="relative xl:left-72 xl:top-96 top-40 left-2 xl:scale-150">
              <Rock />
            </div>
            <div className="relative -top-10 xl:left-80 xl:top-20 right-4 xl:scale-150">
              <Scissors />
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}
export default Game;
