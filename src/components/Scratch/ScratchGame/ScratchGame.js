import React from "react";
//components
import { ScratchImage } from "../ScratchImage/ScratchImage";
//react-router
import { Link } from "react-router-dom";
//style
import "./scratchGame.scss";

export const ScratchGame = () => {
  return (
    <>
      <div className="main-btn-cont">
        <Link to="/smash-button-game">
          <button className="main-btn gold"></button>
        </Link>
        <Link to="/scratch-game">
          <button className="main-btn blue"></button>
        </Link>
      </div>
      <p className="text host">@taylorswift presents</p>
      <p className="text title wxyz">Scratch to Win!</p>
      <ScratchImage />
    </>
  );
};
