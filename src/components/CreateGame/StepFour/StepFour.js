import React from "react";
//react-router-dom
import { Link } from "react-router-dom";
//styles
import "./stepFour.scss";

const StepFour = ({ gameUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${gameUrl}`);
  };

  return (
    <div className="game-container">
      <p className="text">Your game is created, enjoy</p>
      <div className="btn-container-four">
        <button className="button" onClick={copyToClipboard}>
          Copy URL game
        </button>
      </div>
    </div>
  );
};

export default StepFour;
