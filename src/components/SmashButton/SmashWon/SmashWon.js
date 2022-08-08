import React from "react";
//components
import { SmashButton } from "../SmashButton/SmashButton";
//react-router
import { Link } from "react-router-dom";
//styles
import "./smashWon.scss";

export const SmashWon = ({ won }) => {
  return (
    <>
      <p className="text title">1st place</p>
      <SmashButton won={won} />
      <p className="text won-msg">You Won 30$!</p>
      <p className="text desc">{`Message from @friendlyFriend:\n"You must really like pickless!!"`}</p>
      <button className="button">
        <Link
          to="/more-games"
          style={{ textDecoration: "none", color: "white" }}
        >
          CONTINUE
        </Link>
      </button>
    </>
  );
};
