import React, { useState } from "react";
import "../styles/popUp.scss";
import PopUp from "./PopUp";

function OpenPopUp() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const closePopUp = () => {
    setIsOpenPopUp(false);
  };

  return (
    <div className="popup">
      <h1>Hello World</h1>
      <button className="open-btn" onClick={() => setIsOpenPopUp(true)}>
        Open PopUp
      </button>
      {isOpenPopUp && <PopUp closePopUp={closePopUp} />}
    </div>
  );
}

export default OpenPopUp;
