import { useState, useEffect } from "react";
//utils
import { copyToClipboard, handleSharing } from "../../../utils/share";
//styles
import "./stepFour.scss";

const StepFour = ({ gameUrl, form, setStep }) => {
  const [sharedMessage, setSharedMessage] = useState("Share");
  const [copyMessage, setCopyMessage] = useState("Copy URL Game");

  useEffect(() => {
    if (!form.gameSelected || form.images.length < 4 || !form.prizes) {
      console.log(
        form,
        !form.gameSelected,
        form.images.length < 4,
        form.prizes
      );

      // window.sessionStorage.clear();
      // setStep(0);
    }
  }, []);

  return (
    <div className="game-container">
      <p className="text">Your game is created, enjoy</p>
      <div className="btn-container-four">
        <button
          className="button"
          onClick={() => copyToClipboard(gameUrl, setCopyMessage)}
        >
          {copyMessage}
        </button>
        <button
          className="button"
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
