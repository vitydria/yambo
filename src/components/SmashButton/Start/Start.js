import React from "react";
//styles
import "./start.scss";

export const Start = ({ setStart }) => {
  return (
    <div className="start">
      <h1 className="host">@friendlyFriend presents...</h1>
      <div className="button-container">
        <p className="title">Tap Monster!</p>
        <button
          className="button button__large"
          onClick={() => {
            setStart(true);
          }}
        >
          PLAY
        </button>
      </div>
      <p className="text footer">yambo</p>
    </div>
  );
};
