import "./App.css";

// Images
import rules from "../images/image-rules.svg";
import closeRules from "../images/icon-close.svg";

// Components

function App() {
  return (
    <>
      <div className="App">
        <div className="top-section">
          <div className="grid text-5xl text-left">
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
        </div>

        {/* Rules Modal */}
        <label htmlFor="my-modal" className="btn mt-20">
          Rules
        </label>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-slate-100">
            {/* Modal Content */}
            <label htmlFor="my-modal" className="">
              <div className="rulesheader">
                <div className="text-gray-900 text-4xl float-left font-bold">
                  RULES
                </div>
                <img src={closeRules} className="float-right" />
              </div>
            </label>
            <img src={rules} className="mt-20 m-auto" />
            <div className="modal-action"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
