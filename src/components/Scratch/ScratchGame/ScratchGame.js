import React from "react";
//components
import ScratchOff from "../ScratchOff/ScratchOff";
//react-router
import { Link } from "react-router-dom";
//style
import scratch from "./scratch-img.svg";
import "./scratchGame.scss";

export const ScratchGame = ({ setWin }) => {
  const win = () => {
    setWin(true);
  };
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
      <p className="text host header">@taylorswift presents</p>
      <div className="scratch-img-cont">
        <p className="text title wxyz">Scratch to Win!</p>
        <ScratchOff background={scratch} onfinished={win} />
      </div>
    </>
  );
};
