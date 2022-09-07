import React from "react";
//seo
import { Helmet } from "react-helmet";
//hooks
import useWon from "../../hooks/useWon";
import useSmash from "../../hooks/useSmash";
//components
import { Start } from "../../components/SmashButton/Start/Start";
import { SmashButtonGame } from "../../components/SmashButton/SmashButtonGame/SmashButtonGame";
import { SmashWon } from "../../components/SmashButton/SmashWon/SmashWon";
//style
import "./smash.scss";
import useStart from "../../hooks/useStart";

const Smash = () => {
  const { clicks, setClicks } = useSmash();
  const { start, setStart } = useStart();
  const { won, setWon } = useWon();

  return (
    <div className={`smash ${!start ? "" : "start"} ${won ? "won" : ""}`}>
      <Helmet>
        <meta
          name="description"
          content="Smash the button as much as you can"
        />
        <title>Smash button game</title>
      </Helmet>
      {!start && <Start setStart={setStart} />}
      {start && !won && (
        <SmashButtonGame
          clicks={clicks}
          setClicks={setClicks}
          won={won}
          setWon={setWon}
        />
      )}
      {start && won && <SmashWon clicks={clicks} won={won} />}
    </div>
  );
};

export default Smash;
