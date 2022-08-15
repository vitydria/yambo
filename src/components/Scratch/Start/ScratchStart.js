import React from "react";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
//styles
import "./scratchStart.scss";

export const ScratchStart = ({ setStart }) => {
  return (
    <>
      <FontAwesomeIcon icon="fa-solid fa-trophy" />
      <p className="text host header">@friendlyFriends presents...</p>
      <div className="container">
        <p className="text title">Scratch Game</p>
        <div className="desc-cont">
          <p className="text prize-title">
            Prizes <FontAwesomeIcon icon={faTrophy} />
          </p>
          <p className="text prize-desc">#1 Ticket for a concert</p>
          <p className="text prize-desc">#2 Album</p>
          <p className="text prize-desc">#3 Spotify premium</p>
          <p className="text prize-desc">#4 Tokens</p>
        </div>
        <button
          className="button"
          onClick={() => {
            setStart(true);
          }}
        >
          PLAY
        </button>
      </div>
    </>
  );
};
