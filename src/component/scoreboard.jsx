// Contexts
import { useContext } from "react";
import ScoreContext from "../contexts/ScoreContext";
import Logo from "../component/img/logo.svg";

function Scoreboard() {
  const { score } = useContext(ScoreContext);

  return (
    <>
      <div className="border-2 rounded-xl p-4 flex border-blue-300 m-auto -mt-96 xl:-mt-[30rem] xl:scale-110 xl:right-60 right-2">
        <div className="xl:text-5xl text-3xl p-2 text-left xl:w-[33rem] ">
          <img src={Logo} className=" xl:h-40 scale"></img>
        </div>
        <div className="rounded-xl border-2 xl:ml-44 w-1/3 bg-white text-3xl grid text-slate-800 ml-24">
          <p className="text-2xl xl:mt-4 mt-2 xl:w w-20 m-auto">Score</p>
          <div className="xl:text-7xl text-4xl">
            <span>{`${score}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scoreboard;
