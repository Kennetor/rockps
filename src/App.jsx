import "./App.css";

// Images

import triangle from "../images/bg-triangle.svg";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Paper from "./component/paper";
import Rock from "./component/rock";
import Scissors from "./component/scissors";
import Scoreboard from "./component/scoreboard";
import Modal from "./component/modal";

function App() {
  return (
    <>
      <div className="App">
        <Scoreboard />
        {/* Choices */}
        <div className="ml-20 mt-32 absolute">
          <img src={triangle} className="absolute" />
          <div className="flex">
            <div className="relative -top-12">
              <Paper />
            </div>
            <div className="relative top-36 right-16">
              <Rock />
            </div>
            <div className="relative -top-10 right-28">
              <Scissors />
            </div>
          </div>
        </div>
        <Modal />
      </div>
    </>
  );
}

export default App;
