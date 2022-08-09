import React from "react";
//components
import { Timer } from "../Timer";
import { SmashButton } from "../SmashButton/SmashButton";
//styles
import "./smashButtonGame.scss";

export const SmashButtonGame = ({ won, setWon }) => {
  return (
    <>
      <h1 className="text host">@friendlyFriend presents...</h1>
      <p className="text title line">{`Smash the
      Button!`}</p>
      <div>
        <SmashButton won={won} setWon={setWon} />
        <Timer />
      </div>
    </>
  );
};
