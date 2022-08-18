import React from "react";
//react-router-dom
import { Link } from "react-router-dom";
//styles
import "./stepFour.scss";

export const StepFour = () => {
  return (
    <div className="game-container">
      <p className="text">Your game is created, enjoy</p>
      <Link to="/" className="button">
        Ok
      </Link>
    </div>
  );
};
