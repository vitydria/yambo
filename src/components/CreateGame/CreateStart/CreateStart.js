import React from "react";
//styles
import "./createStart.scss";
const CreateStart = ({ handleStart }) => {
  return (
    <>
      <div className="create-container">
        <h1 className="text title">Set game</h1>
        <button
          className="button"
          onClick={() => {
            handleStart(true);
          }}
        >
          START
        </button>
      </div>
      <p className="text footer">yambo</p>
    </>
  );
};

export default CreateStart;
