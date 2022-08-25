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

export const ScratchWon = ({ win, index }) => {
  const { settings } = useSettingsContext();

  return (
    <div className="won-container">
      <Confetti recycle={false} />
      <p className="text title margin-title">You Win!</p>
      <ScratchImage image={`${baseUrl}/${settings.images[index]}`} win={win} />
      <p className="text token-size">{`$${settings.prizes[index]} Amazon Gift Card`}</p>
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
