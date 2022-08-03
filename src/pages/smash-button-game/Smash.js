import React from "react";
//components
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
      <h1>@friendlyfriend presents</h1>
      <p>Tap Monster!</p>
      <button>play</button>
      <SmashButtonGame />
      <SmashWon />
    </div>
  );
};

export default Smash;
