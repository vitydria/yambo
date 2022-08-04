import React from "react";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon";

const Scratch = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScratchGame />
      <ScratchWon />
    </div>
  );
};

export default Scratch;
