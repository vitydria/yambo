import React from "react";
//react-router-dom
import { Link } from "react-router-dom";
//styles
import "./stepFour.scss";

const StepFour = ({ gameUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://moonlit-valkyrie-314b94.netlify.app/${gameUrl}`
    );
  };

  return (
    <div className="game-container">
      <p className="text">Your game is created, enjoy</p>
      <div className="btn-container">
        <button className="button" onClick={copyToClipboard}>
          Click to copy link to clipboard
        </button>
        <Link to="/" className="button">
          Ok
        </Link>
      </div>
    </div>
  );
};

export default StepFour;
