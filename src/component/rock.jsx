// CSS
import "./styling.css";
import rock from "./icon-rock.svg";

function Rock() {
  return (
    <>
      <div class="stein">
        <img src={rock} className="m-8" />
      </div>
    </>
  );
}
export default Rock;
