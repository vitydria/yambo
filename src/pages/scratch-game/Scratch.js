import React, { useState } from "react";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
//styles
import "./scratch.scss";

const Scratch = () => {
  const [win, setWin] = useState(false);

  return (
    <div className={`scratch ${win ? "scratch-won" : ""}`}>
      {!win && <ScratchGame setWin={setWin} />}
      {win && <ScratchWon win={win} />}
    </div>
  );
};

export default Scratch;
