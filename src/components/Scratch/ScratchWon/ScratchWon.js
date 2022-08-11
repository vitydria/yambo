import React from "react";
//components
import { ScratchImage } from "../ScratchImage/ScratchImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

//router-dom
import { Link } from "react-router-dom";
//styles
import "./scratchWon.scss";

export const ScratchWon = ({ win }) => {
  return (
    <div className="won-container">
      <p className="text title margin-title">You Win!</p>
      <ScratchImage win={win} />
      <p className="text token-size ">Token #298</p>
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
