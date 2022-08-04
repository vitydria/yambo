import React from "react";
//components
import { Token } from "../../components/MoreGames/Token";
import { Game } from "../../components/MoreGames/Game";

const MoreGames = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <p>Your tokens</p>
      <Token />
      <p>Explore other games</p>
      <Game />
      <Game />
      <Game />
      <p>See more...</p>
    </div>
  );
};

export default MoreGames;
