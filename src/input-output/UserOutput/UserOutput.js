import React from "react";

import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="output-content">
      <div className="UserOutput">
        <p>rgba color code is : {props.colorName} use as</p>
        <p>background-color: {props.colorName}</p>

        <p>This is the RBGA() color code you generated &#128578;</p>
      </div>

      <p className="copy-right">
        Create & Copy &copy; by <a href="#">Amit Samadder</a> with &#x2764;
      </p>
    </div>
  );
};

export default userOutput;
