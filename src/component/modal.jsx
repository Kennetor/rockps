import rules from "./img/image-rules.svg";
import closeRules from "./img/icon-close.svg";

function Modal() {
  return (
    <>
      <label
        htmlFor="my-modal"
        className="btn bottom-10 xl:right-10 absolute float-right scale-125 right-36 bg-transparent border-white w-[8rem] text-xl"
      >
        Rules
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal xl:scale-150">
        <div className="modal-box bg-white">
          {/* Modal Content */}
          <label htmlFor="my-modal">
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
    </>
  );
}
export default Modal;
