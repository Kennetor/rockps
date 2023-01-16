import { useState } from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";

import Game from "./component/game";
import Scoreboard from "./component/scoreboard";
import Versus from "./component/versusMode";

function App() {
  return (
    <>
      <Scoreboard />

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/versus" render={() => <Versus />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
