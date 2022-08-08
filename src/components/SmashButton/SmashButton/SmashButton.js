import React from "react";
//styles
import "./smashButton.scss";

export const SmashButton = ({ won, setWon }) => {
  return (
    <button
      className={`smash-button text ${won ? "smash-won" : ""}`}
      onClick={() => {
        setWon(true);
      }}
    >{`120\nClicks`}</button>
  );
};
