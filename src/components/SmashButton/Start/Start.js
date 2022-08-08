import React from "react";
//styles
import "./start.scss";

export const Start = ({ setStart }) => {
  return (
    <>
      <h1 className="text host">@friendlyfriend presents</h1>
      <div className="button-container">
        <p className="text title">Tap Monster!</p>
        <button
          className="button"
          onClick={() => {
            setStart(true);
          }}
        >
          PLAY
        </button>
      </div>
      <p className="text">yambo</p>
    </>
  );
};
