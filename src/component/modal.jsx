import rules from "./image-rules.svg";
import closeRules from "./icon-close.svg";

function Modal() {
  return (
    <>
      <label
        htmlFor="my-modal"
        className="btn bottom-10 right-10 absolute float-right scale-150"
      >
        Rules
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle flot" />
      <div className="modal">
        <div className="modal-box bg-slate-100 scale-110">
          {/* Modal Content */}
          <label htmlFor="my-modal" className="">
            <div className="rulesheader">
              <div className="text-gray-900 text-4xl float-left font-bold">
                RULES
              </div>
              <img src={closeRules} className="float-right" />
            </div>
          </label>
          <img src={rules} className="mt-20 m-auto scale-110" />
          <div className="modal-action"></div>
        </div>
      </div>
    </>
  );
}
export default Modal;
