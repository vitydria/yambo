import React from "react";
import { Timer } from "./Timer";
import { SmashButton } from "./SmashButton";
//components

export const SmashButtonGame = () => {
  return (
    <>
      <h1>@friendlyfriend presents</h1>
      <p>Smash the button</p>
      <SmashButton />
      <Timer />
    </>
  );
};
