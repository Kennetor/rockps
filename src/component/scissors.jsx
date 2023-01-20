// CSS
import "./styling.css";
import saks from "./icon-scissors.svg";

function Scissors() {
  return (
    <>
      <div className="saks">
        <img src={saks} className="p-8" />
      </div>
    </>
  );
}
export default Scissors;
