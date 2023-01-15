import { Link } from "react-router-dom";

function Scoreboard() {
  return (
    <>
      <div className="top-section border-2 rounded-xl p-6 flex -mt-36">
        <div className="text-5xl text-left">
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <div className="rounded-xl border-2 ml-44 w-32 bg-white text-3xl text-slate-800">
          <p className="text-2xl mt-4 ">Score</p>
          <div className="text-7xl">
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Scoreboard;
