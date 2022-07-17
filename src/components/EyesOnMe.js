// Code EyesOnMe Component Here
import React from "react";

const EyesOnMe = () => {
  function handleFocus(event) {
    console.log("Good!");
  }
  function handleBlur(event) {
    console.log("Hey! Eyes on me!");
  }
  return (
    <button onBlur={handleBlur} onFocus={handleFocus}>
      Eyes on me
    </button>
  );
};

export default EyesOnMe;
