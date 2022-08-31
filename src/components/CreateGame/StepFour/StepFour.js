import React from "react";
//styles
import "./stepFour.scss";

const StepFour = ({ gameUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${gameUrl}`);
    window.sessionStorage.clear();
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
