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
