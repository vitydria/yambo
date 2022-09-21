import { useState } from "react";
//utils
import { copyToClipboard, handleSharing } from "../../../utils/share";
//styles
import "./stepFour.scss";

const StepFour = ({ gameUrl }) => {
  const [sharedMessage, setSharedMessage] = useState("Share");
  const [copyMessage, setCopyMessage] = useState("Copy URL Game");

  return (
    <div className="game-container">
      <p className="title-small">Your game is created, enjoy</p>
      <div className="btn-container-four">
        <button
          className="button button__large"
          onClick={() => copyToClipboard(gameUrl, setCopyMessage)}
        >
          {copyMessage}
        </button>
        <button
          className="button button__large"
          onClick={() =>
            handleSharing(gameUrl, setSharedMessage, setCopyMessage)
          }
        >
          {sharedMessage}
        </button>
      </div>
    </div>
  );
};

export default StepFour;
