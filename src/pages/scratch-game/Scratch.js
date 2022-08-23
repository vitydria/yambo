import React, { useRef } from "react";
//hooks
import useWon from "../../hooks/useWon";
import useStart from "../../hooks/useStart";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
import { ScratchStart } from "../../components/Scratch/Start/ScratchStart";
//seo
import { Helmet } from "react-helmet";
//utils
import { randomPrize } from "../../utils/scratch";
//styles
import "./scratch.scss";

const Scratch = () => {
  const { won, setWon } = useWon();
  const { start, setStart } = useStart();
  const index = useRef(randomPrize());
  console.log(index.current);

  return (
    <div className={`scratch ${won ? "scratch-won" : ""}`}>
      <Helmet>
        <meta name="description" content="Scratch image to win a prize" />
        <title>Scratch game</title>
      </Helmet>
      {!start && <ScratchStart setStart={setStart} />}
      {!won && start && <ScratchGame setWon={setWon} index={index.current} />}
      {won && <ScratchWon won={won} index={index.current} />}
    </div>
  );
};

export default Scratch;
