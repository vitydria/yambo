import React from "react";
//styles
import "./smashButton.scss";

export const SmashButton = ({ won, clicks, setClicks }) => {
  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };
  return (
    <button
      className={`smash-button text ${won ? "smash-won" : ""}`}
      onClick={handleClick}
    >{`${clicks}\nClicks`}</button>
  );
};
