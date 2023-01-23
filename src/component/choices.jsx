// CSS
import "./style.css";
import rock from "./img/icon-rock.svg";
import paper from "./img/icon-paper.svg";
import saks from "./img/icon-scissors.svg";

export function Scissors() {
  return (
    <>
      <div className="saks p-12 xl:p-16 relative right-6">
        <img
          src={saks}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto"
        />
      </div>
    </>
  );
}
export function Paper() {
  return (
    <>
      <div className="relative p-12 xl:p-16 papir ">
        <img
          src={paper}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto"
        />
      </div>
    </>
  );
}
export function Circle() {
  return (
    <>
      <div className="relative p-10 ">
        <div className="fixed -translate-y-8 -translate-x-16 m-auto h-32 w-32 bg-slate-900 rounded-full opacity-30"></div>
      </div>
    </>
  );
}
export function WinnerCircle() {
  return (
    <>
      <div className="absolute">
        <div className="fixed p-10 ">
          <div className="fixed -translate-y-52 -translate-x-60 m-auto h-[30rem] w-[30rem] bg-slate-600 rounded-full opacity-10"></div>
          <div className="fixed -translate-y-40 -translate-x-48 m-auto h-[25rem] w-[25rem] bg-slate-600 rounded-full opacity-10"></div>
          <div className="fixed -translate-y-28 -translate-x-36 m-auto h-72 w-72 bg-slate-600 rounded-full opacity-10"></div>
        </div>
        <div className="relative p-10 ">
          <div className="fixed -translate-y-8 -translate-x-16 m-auto h-32 w-32 bg-slate-900 rounded-full opacity-30"></div>
        </div>
      </div>
    </>
  );
}
function Rock() {
  return (
    <>
      <div className="relative stein p-12 xl:p-16 right-4">
        <img
          src={rock}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto"
        />
      </div>
    </>
  );
}
export default Rock;
