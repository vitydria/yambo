import React from "react";
//components
import { Start } from "../../components/SmashButton/Start";
import { SmashButtonGame } from "../../components/SmashButton/SmashButtonGame";
import { SmashWon } from "../../components/SmashButton/SmashWon";

const Smash = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Start />
      <SmashButtonGame />
      <SmashWon />
    </div>
  );
};

export default Smash;
