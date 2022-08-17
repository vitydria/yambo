import React from "react";

export const StepTwo = ({ nextStep }) => {
  return (
    <div>
      <h1>Upload your photos</h1>
      <input type="file"></input>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};
