import React from "react";

export const StepOne = ({ nextStep }) => {
  return (
    <div>
      <h1>Choose your game</h1>
      <button onClick={nextStep}>Scratch</button>
      <button onClick={nextStep}>Smash</button>
    </div>
  );
};
