import { Link } from "react-router-dom";

function Scoreboard() {
  return (
    <>
      <div className="border-2 rounded-xl p-6 flex xl:-mt-[25rem] border-blue-300 scale-75 -mt-72">
        <div className="xl:text-5xl text-3xl p-2 text-left xl:w-[33rem] ">
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <div className="rounded-xl border-2 xl:ml-44 w-1/3 bg-white text-3xl text-slate-800 ml-24">
          <p className="text-2xl xl:mt-4 mt-2 ">Score</p>
          <div className="text-7xl">
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Scoreboard;
