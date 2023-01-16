import Paper from "./paper";
import Rock from "./rock";

function Versus() {
  return (
    <>
      <div className="xl:mt-0 -mt-14">
        <div className="fixed left-12 xl:right xl:scale-150 xl:left-96 top-72 xl:top-96">
          <h1>You Picked</h1>
          <Rock />
        </div>
        <div className="fixed right-12 xl:right xl:scale-150 xl:right-96 top-72 xl:top-96">
          <h1>The House Picked</h1>
          <Paper />
        </div>
      </div>
    </>
  );
}
export default Versus;
