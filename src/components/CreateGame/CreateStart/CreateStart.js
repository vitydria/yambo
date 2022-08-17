import React from "react";
//styles
import "./createStart.scss";

export const CreateStart = ({ setStart }) => {
  const start = () => {
    setStart(true);
  };
  return (
    <>
      <div className="create-container">
        <h1 className="text title">Set game</h1>
        <button className="button" onClick={start}>
          START
        </button>
      </div>
      <p className="text footer">yambo</p>
    </>
  );
};
