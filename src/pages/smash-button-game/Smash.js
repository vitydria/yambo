import React from "react";
//components
import { Start } from "../../components/SmashButton/Start/Start";
import { SmashButtonGame } from "../../components/SmashButton/SmashButtonGame/SmashButtonGame";
import { SmashWon } from "../../components/SmashButton/SmashWon/SmashWon";
//style
import "./smash.scss";

const Smash = () => {
  return (
    <div className="smash won">
      {/* <Start /> */}
      {/* <SmashButtonGame /> */}
      <SmashWon />
    </div>
  );
};

export default Smash;
