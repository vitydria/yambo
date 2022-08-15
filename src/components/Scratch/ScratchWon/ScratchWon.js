import React from "react";
//components
import { ScratchImage } from "../ScratchImage/ScratchImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Confetti from "react-confetti";
//router-dom
import { Link } from "react-router-dom";
//styles
import "./scratchWon.scss";

export const ScratchWon = ({ image, win, message, index }) => {
  return (
    <div className="won-container">
      <Confetti recycle={false} />
      <p className="text title margin-title">You Win!</p>
      <ScratchImage image={image} win={win} />
      <p className="text token-size">{`Prize #${index + 1}\n${message}`}</p>
      <Link
        className="button"
        to="/more-games"
        style={{ textDecoration: "none", color: "white" }}
      >
        CONTINUE
        <FontAwesomeIcon icon={faArrowRightToBracket} />
      </Link>
    </div>
  );
};
