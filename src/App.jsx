import { useState } from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";

import Game from "./component/game";
import Scoreboard from "./component/scoreboard";
import Versus from "./component/versusMode";

function App() {
  return (
    <>
      <Router>
        <div>
          <Scoreboard />
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/play" element={<Versus />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
