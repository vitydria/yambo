import React from "react";

export const StepThree = ({ nextStep }) => {
  return (
    <div>
      <h1>Choose your prizes</h1>
      <p>Prize #1</p>
      <input type="text" />
      <p>Prize #2</p>
      <input type="text" />
      <p>Prize #3</p>
      <input type="text" />
      <p>Prize #4</p>
      <input type="text" />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};
