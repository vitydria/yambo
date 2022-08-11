import React from "react";
//won
import useWon from "../../hooks/useWon";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
//seo
import { Helmet } from "react-helmet";
//styles
import "./scratch.scss";

const Scratch = () => {
  const { won, setWon } = useWon();

  return (
    <div className={`scratch ${won ? "scratch-won" : ""}`}>
      <Helmet>
        <meta name="description" content="Scratch image to win a prize" />
        <title>Scratch game</title>
      </Helmet>
      {!won && <ScratchGame setWon={setWon} />}
      {won && <ScratchWon won={won} />}
    </div>
  );
};

export default Scratch;
