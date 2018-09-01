import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = props => {
  return (
    <div className="ma0 ma4">
      <Tilt
        className="Tilt br2 shadow-5"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa1">
          {" "}
          <img
            style={{ paddingTop: "30px", height: "155px" }}
            alt="logp"
            src={brain}
          />{" "}
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
