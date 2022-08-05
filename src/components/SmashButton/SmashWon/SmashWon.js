import React from "react";
//components
import { SmashButton } from "../SmashButton/SmashButton";
//styles
import "./smashWon.scss";

export const SmashWon = () => {
  return (
    <>
      <p className="text title">1st place</p>
      <SmashButton />
      <p className="text won-msg">You Won 30$!</p>
      <p className="text desc">{`Message from @friendlyFriend:\n"You must really like pickless!!"`}</p>
      <button className="button">CONTINUE</button>
    </>
  );
};
