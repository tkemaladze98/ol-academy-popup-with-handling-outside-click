import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/popUp.scss";

function PopUp(props) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!popupRef.current?.contains(e.target)) {
        props.closePopUp();
      }
    };
    document.addEventListener("click", handleClick);

    return function cleanUp() {
      document.removeEventListener("click", handleClick);
    };
  }, [props]);

  return (
    <div className="outside">
      <div className="inside" ref={popupRef}>
        <button className="close-btn" onClick={() => props.closePopUp()}>
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
