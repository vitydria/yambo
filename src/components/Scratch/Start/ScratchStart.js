import React from "react";
//context
import { useSettingsContext } from "../../../hooks/useSettingsContext";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
//styles
import "./scratchStart.scss";

export const ScratchStart = ({ setStart }) => {
  const { settings } = useSettingsContext();

  return (
    <>
      <p className="text host header">@friendlyFriends presents...</p>
      <div className="container">
        <p className="text title">Scratch Game</p>
        <div className="desc-cont">
          <p className="text prize-title">
            Prizes <FontAwesomeIcon icon={faTrophy} />
          </p>
          {settings.prizes && settings.prizes.length > 0 && (
            <>
              <p className="text prize-desc">{`$${settings?.prizes[0]} Amazon Gift Card`}</p>
              <p className="text prize-desc">{`$${settings?.prizes[1]} Amazon Gift Card`}</p>
              <p className="text prize-desc">{`$${settings?.prizes[2]} Amazon Gift Card`}</p>
              <p className="text prize-desc">{`${settings?.prizes[3]} Tokens`}</p>
            </>
          )}
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
