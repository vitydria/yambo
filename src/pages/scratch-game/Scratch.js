import React, { useState } from "react";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
//react-router
import { Link } from "react-router-dom";
//styles
import "./scratch.scss";

const Scratch = () => {
  const [win, setWin] = useState(false);

  const handleWin = () => {
    setWin((prevState) => !prevState);
  };

  return (
    <div className={`scratch ${win ? "scratch-won" : ""}`}>
      <div className="main-btn-cont" style={{ top: "40px" }}>
        <button className="main-btn gold" onClick={handleWin}></button>
        <Link to="/more-games">
          <button className="main-btn blue"></button>
        </Link>
      </div>
      {!win && <ScratchGame />}
      {win && <ScratchWon win={win} />}
    </div>
  );
};

export default Scratch;
