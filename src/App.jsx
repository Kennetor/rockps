import { HashRouter as Router, Routes, Route } from "react-router-dom";
// CSS
import "./App.css";

// Images
import triangle from "../images/bg-triangle.svg";
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
        <div className="xl:scale-150">
          <Router>
            <Scoreboard />
          </Router>
          {/* Choices */}
          <div className="xl:ml-20 xl:mt-16 xl:absolute xl:scale-110 top-56 left-40 mt-10">
            <img src={triangle} className="absolute left-10" />
            <div className="flex">
              <div className="relative -top-12 xl:left-6 left-8 ">
                <Paper />
              </div>
              <div className="relative xl:left-0 xl:top-36 top-40 left-2">
                <Rock />
              </div>
              <div className="relative -top-10 xl:right-10 right-4">
                <Scissors />
              </div>
            </div>
          </div>
        </div>
        <Modal />
      </div>
    </>
  );
}

export default App;
