import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/popUp.scss";

function PopUp(props) {
  const popup = useRef(null);
  const handleClick = (e) => {
    if(!popup.current.contains(e.target)){
        props.openPopUp()
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return document.removeEventListener("click", handleClick);
  });

  return (
    <div className="outside" onClick={(e) => handleClick(e)}>
      <div className="inside" ref={popup}>
        <button className="close-btn" onClick={() => props.openPopUp()}>
          <AiOutlineClose />
        </button>
        <h2>This is PopUp</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab,
          obcaecati, aut eos itaque quam quis cumque sapiente culpa quaerat
          incidunt, rem natus officiis repellendus vitae. Perferendis,
          similique. Laborum, nobis.
        </p>
        <article>
          <button className="sign-up-btn">Sign Up</button>
          <button className="next-btn">Next Page</button>
        </article>
      </div>
    </div>
  );
}

export default PopUp;
