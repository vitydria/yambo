import React from "react";
//components
import { Timer } from "../Timer";
import { SmashButton } from "../SmashButton/SmashButton";
//styles
import "./smashButtonGame.scss";

export const SmashButtonGame = ({ won, setWon }) => {
  return (
    <>
      <h1 className="header text host">@friendlyFriend presents...</h1>
      <div className="button-container">
        <p className="text title line">{`Smash the
      Button!`}</p>
        <SmashButton won={won} setWon={setWon} />
        <Timer />
      </div>
    </>
  );
};
