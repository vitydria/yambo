import React from "react";
import { SmashButton } from "./SmashButton";

export const SmashWon = () => {
  return (
    <div>
      <p>1st place</p>
      <SmashButton />
      <p>You Won 30$!</p>
      <p>{`Message from @friendlyFriend: "You must really like pickless!!"`}</p>
      <button>continue</button>
    </div>
  );
};
