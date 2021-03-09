import React from "react";
import "./source.css";
import Mask from "../../mask.svg";
import Editor from "../../Editor.svg";

const Source = () => {
  return (
    <div className="container">
      <div className="first">
        <div className="img">
          <img className="img" src={Mask} alt="mask.svg/" />
          <img className="img2" src={Editor} alt="Editor.svg/" />
        </div>
        <div className="hero">
          <h1 className="hero">
            Heroes <br /> Wear <br /> Masks
          </h1>
        </div>
        <div className="heal">
          <h2 className="heal">
            Healthcare workers are hereos, but they don’t have <br /> enough
            medical/N95 masks to keep fighting for us. <br /> Put a mask on your
            profile pictures to help raise <br /> awareness about the current
            shortage.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Source;
