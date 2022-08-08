import React from "react";
//style
import "./game.scss";
//image
import Img from "../../../assets/image3.svg";

export const Game = () => {
  return (
    <div className="game-cont">
      <img src={Img} className="game-img" alt="Game" />
      <div className="game-txt-cont">
        <p className="game-title">Score in the top 200, get 20% off!!</p>
        <p className="game-desc">Offered by Walmart</p>
      </div>
    </div>
  );
};
