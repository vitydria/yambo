import React from "react";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
//styles
import "./scratch.scss";

const Scratch = () => {
  return (
    <div className="scratch won">
      <ScratchGame />
      {/* <ScratchWon /> */}
    </div>
  );
};

export default Scratch;
