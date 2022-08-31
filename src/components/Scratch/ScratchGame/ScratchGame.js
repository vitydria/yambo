import React from "react";
import { useSettingsContext } from "../../../hooks/useSettingsContext";
//components
import ScratchOff from "../ScratchOff/ScratchOff";
//utils
import { baseUrl } from "../../../utils/url";
//style
import "./scratchGame.scss";

export const ScratchGame = ({ setWon }) => {
  const { settings } = useSettingsContext();
  const { images, index } = settings;
  const youWon = () => {
    setWon(true);
  };

  return (
    <>
      <p className="text host header">@taylorswift presents</p>
      <div className="scratch-img-cont">
        <p className="text title wxyz">Scratch to Win!</p>
        <ScratchOff
          background={`${baseUrl}${images[index]}`}
          width={300}
          height={300}
          onfinished={youWon}
        />
      </div>
    </>
  );
};
