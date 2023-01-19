import { useState, useEffect } from "react";
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
    if (outcome === "win") {
      setScore((prevScore) => prevScore + 1);
    } else if (outcome === "lose") {
      setScore((prevScore) => prevScore - 1);
    } else if (outcome === "draw") {
      setScore(score);
    }
    console.log(outcome);
  }

  useEffect(() => {
    console.log("score updated: ", score);
  }, [score]);

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
          </div>{" "}
        </ScoreContext.Provider>
      </Router>
      <Outlet />
    </>
  );
}

export default App;
