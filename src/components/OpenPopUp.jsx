import React, { useState } from "react";
import "../styles/popUp.scss";
import PopUp from "./PopUp";

function OpenPopUp() {
  const [showPopUp, setShowPopUp] = useState(false);

  const openPopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="popup">
      <h1>Hello World</h1>
      <button className="open-btn" onClick={() => setShowPopUp(true)}>
        Open PopUp
      </button>
      {showPopUp && <PopUp openPopUp={openPopUp} />}
    </div>
  );
}

export default OpenPopUp;
