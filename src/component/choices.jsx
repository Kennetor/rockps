// CSS
import "./style.css";
import rock from "./img/icon-rock.svg";
import paper from "./img/icon-paper.svg";
import saks from "./img/icon-scissors.svg";

export function Scissors() {
  return (
    <>
      <div className="saks">
        <img src={saks} className="p-8" />
      </div>
    </>
  );
}
export function Paper() {
  return (
    <>
      <div className="papir">
        <img src={paper} className="p-8" />
      </div>
    </>
  );
}
function Rock() {
  return (
    <>
      <div className="stein">
        <img src={rock} className="p-8" />
      </div>
    </>
  );
}
export default Rock;
