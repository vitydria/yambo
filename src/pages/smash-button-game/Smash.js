import React, { useState } from "react";
//components
import { Start } from "../../components/SmashButton/Start/Start";
import { SmashButtonGame } from "../../components/SmashButton/SmashButtonGame/SmashButtonGame";
import { SmashWon } from "../../components/SmashButton/SmashWon/SmashWon";
//style
import "./smash.scss";

const Smash = () => {
  const [start, setStart] = useState(false);
  const [won, setWon] = useState(false);
  return (
    <div className={`smash ${!start ? "" : "start"} ${won ? "won" : ""}`}>
      {!start && <Start setStart={setStart} />}
      {start && !won && <SmashButtonGame won={won} setWon={setWon} />}
      {start && won && <SmashWon won={won} />}
    </div>
  );
};

export default Smash;
