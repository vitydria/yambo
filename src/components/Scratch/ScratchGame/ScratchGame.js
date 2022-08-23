import React from "react";
import { useSettingsContext } from "../../../hooks/useSettingsContext";
//components
import ScratchOff from "../ScratchOff/ScratchOff";
//style
import "./scratchGame.scss";

export const ScratchGame = ({ setWon, index }) => {
  const { settings } = useSettingsContext();
  console.log(index);
  console.log(settings.imageArray[index]);
  const youWon = () => {
    setWon(true);
  };

  return (
    <>
      <p className="text host header">@taylorswift presents</p>
      <div className="scratch-img-cont">
        <p className="text title wxyz">Scratch to Win!</p>
        <ScratchOff
          background={`https://i.imgur.com/${settings.imageArray[index]}`}
          onfinished={youWon}
        />
      </div>
    </>
  );
};
