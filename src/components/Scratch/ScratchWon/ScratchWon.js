import React from "react";
//router-dom
import { Link } from "react-router-dom";
//hooks
import { useSettingsContext } from "../../../hooks/useSettingsContext";
//components
import { ScratchImage } from "../ScratchImage/ScratchImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Confetti from "react-confetti";
//utils
import { baseUrl } from "../../../utils/url";
//styles
import "./scratchWon.scss";

export const ScratchWon = ({ win }) => {
  const { settings } = useSettingsContext();
  const { images, prizes, index } = settings;

  return (
    <div className="won-container">
      <Confetti recycle={false} />
      <p className="text title margin-title">You Win!</p>
      <ScratchImage image={`${baseUrl}/${images[index]}`} win={win} />
      <p className="text token-size">{`$${prizes[index]} Amazon Gift Card`}</p>
      <Link
        className="button"
        to="/more-games"
        onClick={window.sessionStorage.clear()}
        style={{ textDecoration: "none", color: "white" }}
      >
        CONTINUE
        <FontAwesomeIcon icon={faArrowRightToBracket} />
      </Link>
    </div>
  );
};
