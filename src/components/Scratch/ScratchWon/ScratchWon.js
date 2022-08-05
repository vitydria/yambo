import React from "react";
import { ScratchImage } from "../ScratchImage/ScratchImage";
import "./scratchWon.scss";

export const ScratchWon = () => {
  return (
    <>
      <p className="text title margin-title">You Win!</p>
      <ScratchImage />
      <p className="text margin-token">Token #298</p>
      <button className="button">CONTINUE</button>
    </>
  );
};
