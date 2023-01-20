import { useState } from "react";
import { HashRouter as Router, Route, Routes, Outlet } from "react-router-dom";

// Components
import Game from "./component/game";
import Scoreboard from "./component/scoreboard";
import RockVersus from "./component/rockVersus";
import PaperVersus from "./component/paperVersus";
import ScissorsVersus from "./component/scissorsVersus";
import ScoreContext from "./contexts/ScoreContext";

function App() {
  const [score, setScore] = useState(0);

  function updateScore(outcome) {
    switch (outcome) {
      case "win":
        setScore((prevScore) => prevScore + 1);
        break;
      case "lose":
        setScore((prevScore) => prevScore - 1);
        break;
      case "draw":
        setScore(score);
        break;
    }
  }
  return (
    <>
      <Router>
        <ScoreContext.Provider value={{ score, updateScore }}>
          <div>
            <Scoreboard />
            <Routes>
              <Route path="/" element={<Game />} />
              <Route path="/play-rock" element={<RockVersus />} />
              <Route path="/play-paper" element={<PaperVersus />} />
              <Route path="/play-scissors" element={<ScissorsVersus />} />
            </Routes>
          </div>
        </ScoreContext.Provider>
      </Router>
      <Outlet />
    </>
  );
}

export default App;
