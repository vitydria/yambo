import React, { useState } from "react";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
//seo
import { Helmet } from "react-helmet";
//styles
import "./scratch.scss";

const Scratch = () => {
  const [win, setWin] = useState(false);

  return (
    <div className={`scratch ${win ? "scratch-won" : ""}`}>
      <Helmet>
        <meta name="description" content="Scratch image to win a prize" />
        <title>Scratch game</title>
      </Helmet>
      {!win && <ScratchGame setWin={setWin} />}
      {win && <ScratchWon win={win} />}
    </div>
  );
};

export default Scratch;
