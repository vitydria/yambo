import { useState } from "react";
//styles
import "./stepFour.scss";

const StepFour = ({ gameUrl }) => {
  const [share, setShare] = useState("Share");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${gameUrl}`);
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
        await navigator.share(sharedData).then(() => setShare("Share Again"));
      } catch (e) {
        console.log("An error has ocurred: ", e);
      }
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/${gameUrl}`);
    }
  };

  return (
    <div className="game-container">
      <p className="text">Your game is created, enjoy</p>
      <div className="btn-container-four">
        <button className="button" onClick={copyToClipboard}>
          Copy game URL
        </button>
        <button className="button" onClick={handleSharing}>
          {share}
        </button>
      </div>
    </div>
  );
};

export default StepFour;
