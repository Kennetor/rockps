import { Link } from "react-router-dom";
// CSS
import "../App.css";

// Images
import triangle from "../component/img/bg-triangle.svg";
// Components

import Modal from "./modal";
import Rock, { Paper, Scissors } from "./choices";

function Game() {
  return (
    <>
      <div className="xl:-mt-20">
        {/* Choices */}
        <div className="xl:ml-20 xl:mt-20 xl:absolute xl:scale-110 top-56 left-40 mt-0">
          <img
            src={triangle}
            className="absolute left-10 xl:left-80 xl:top-44 xl:scale-150"
          />
          <div className="flex">
            <div className="relative -top-10 xl:left-60 xl:top-20 left-8 xl:scale-150">
              <Link to="/play-paper">
                <Paper />
              </Link>
            </div>
            <div className="relative xl:left-72 xl:top-96 top-40 left-2 xl:scale-150">
              <Link to="/play-rock">
                <Rock />
              </Link>
            </div>
            <div className="relative -top-10 xl:left-80 xl:top-20 right-4 xl:scale-150">
              <Link to="/play-scissors">
                <Scissors />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}
export default Game;
