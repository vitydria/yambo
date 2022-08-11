import React from "react";
//components
import { SmashButton } from "../SmashButton/SmashButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
//react-router
import { Link } from "react-router-dom";
//styles
import "./smashWon.scss";

export const SmashWon = ({ won, clicks }) => {
  return (
    <>
      <div className="button-container won-container-bottom">
        <p className="text title">1st place</p>
        <SmashButton won={won} clicks={clicks} />
        <p className="text won-msg">You Won 30$!</p>
        <p className="text desc text-bottom">{`Message from @friendlyFriend:\n"You must really like pickless!!"`}</p>
        <Link
          className="button"
          to="/more-games"
          style={{ textDecoration: "none", color: "white" }}
        >
          CONTINUE
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </Link>
      </div>
    </>
  );
};
