import { useState } from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";

// Components
import Game from "./component/game";
import Scoreboard from "./component/scoreboard";
import RockVersus from "./component/rockVersus";
import PaperVersus from "./component/paperVersus";
import ScissorsVersus from "./component/scissorsVersus";

function App() {
  return (
    <>
      <Router>
        <div>
          <Scoreboard />
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/play-rock" element={<RockVersus />} />
            <Route path="/play-paper" element={<PaperVersus />} />
            <Route path="/play-scissors" element={<ScissorsVersus />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
