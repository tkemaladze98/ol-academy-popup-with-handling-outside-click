import React, { useState } from "react";
import "../styles/popUp.scss";
import PopUp from "./PopUp";

function OpenPopUp() {
  const [showPopUp, setShowPopUp] = useState(false);

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="popup">
      <h1>Hello World</h1>
      <button className="open-btn" onClick={() => setShowPopUp(true)}>
        Open PopUp
      </button>
      {showPopUp && <PopUp closePopUp={closePopUp} />}
    </div>
  );
}

export default OpenPopUp;
