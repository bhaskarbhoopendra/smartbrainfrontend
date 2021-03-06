import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect face in your image give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f5 pa2 w-70 center"
            type="text"
            placeholder="please enter image link here"
            onChange={onInputChange}
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
