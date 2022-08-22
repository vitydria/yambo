import React from "react";
//components
import ScratchOff from "../ScratchOff/ScratchOff";
//style
import image from "../../../assets/image1.svg";
import "./scratchGame.scss";

export const ScratchGame = ({ setWon }) => {
  const youWon = () => {
    setWon(true);
  };

  return (
    <>
      <p className="text host header">@taylorswift presents</p>
      <div className="scratch-img-cont">
        <p className="text title wxyz">Scratch to Win!</p>
        <ScratchOff background={image} onfinished={youWon} />
      </div>
    </>
  );
};
