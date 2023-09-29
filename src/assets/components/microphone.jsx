import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

function Microphone() {
  return (
    <div className="microphone">
      <div className="mic-icon">
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </div>
  );
}

export default Microphone;
