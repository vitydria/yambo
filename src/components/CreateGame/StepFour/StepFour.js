import { useState } from "react";
//styles
import "./stepFour.scss";

const StepFour = ({ gameUrl }) => {
  const [sharedMessage, setSharedMessage] = useState("Share");
  const [urlCopiedMessage, setUrlCopiedMessage] = useState("Copy URL Game");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${gameUrl}`);
    setUrlCopiedMessage("URL Copied!");
    window.sessionStorage.clear();
  };

  const handleSharing = async () => {
    const sharedData = {
      text: "Enjoy",
      title: "Yambo",
      url: `${window.location.origin}/${gameUrl}`,
    };

    if (navigator.share) {
      try {
        await navigator
          .share(sharedData)
          .then(() => setSharedMessage("Share again"));
      } catch (e) {
        navigator.clipboard.writeText(`${window.location.origin}/${gameUrl}`);
        setSharedMessage("URL Copied!");
        setUrlCopiedMessage("URL Copied!");
      }
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/${gameUrl}`);
      setSharedMessage("URL Copied!");
      setUrlCopiedMessage("URL Copied!");
    }
  };

  return (
    <div className="game-container">
      <p className="text">Your game is created, enjoy</p>
      <div className="btn-container-four">
        <button className="button" onClick={copyToClipboard}>
          {urlCopiedMessage}
        </button>
        <button className="button" onClick={handleSharing}>
          {sharedMessage}
        </button>
      </div>
    </div>
  );
};

export default StepFour;
