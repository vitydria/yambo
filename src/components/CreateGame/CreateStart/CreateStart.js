import React from "react";
//styles
import "./createStart.scss";
const CreateStart = ({ setStart }) => {
  return (
    <>
      <div className="create-container">
        <h1 className="text title">Set game</h1>
        <button
          className="button"
          onClick={() => {
            setStart(true);
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
