import React from "react";
//components
import { ScratchImage } from "../ScratchImage/ScratchImage";
//style
import "./scratchGame.scss";

export const ScratchGame = () => {
  return (
    <>
      <p className="text host">@taylorswift presents</p>
      <p className="text title wxyz">Scratch to Win!</p>
      <ScratchImage />
    </>
  );
};
