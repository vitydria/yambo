import React from "react";
//components
import { ScratchImage } from "../../components/Scratch/ScratchImage";
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
      <p>@taylorswift presents</p>
      <p>Scratch to Win!</p>
      <ScratchImage />
      <ScratchWon />
    </div>
  );
};

export default Scratch;
