import React from "react";
//components
import { Timer } from "../Timer";
import { SmashButton } from "../SmashButton/SmashButton";
//styles
import "./smashButtonGame.scss";

export const SmashButtonGame = () => {
  return (
    <>
      <h1 className="text host">@friendlyfriend presents</h1>
      <p className="text title line">{`Smash the
      Button!`}</p>
      <SmashButton />
      <Timer />
    </>
  );
};
