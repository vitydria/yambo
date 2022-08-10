import React, { useState, useEffect } from "react";
//components
import { Timer } from "../Timer";
import { SmashButton } from "../SmashButton/SmashButton";
//styles
import "./smashButtonGame.scss";

export const SmashButtonGame = ({ won, setWon, clicks, setClicks }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds === 0) {
      setWon(true);
    }

    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <>
      <h1 className="header text host">@friendlyFriend presents...</h1>
      <div className="button-container">
        <p className="text title line">{`Smash the
      Button!`}</p>
        <SmashButton
          won={won}
          setWon={setWon}
          clicks={clicks}
          setClicks={setClicks}
        />
        <Timer seconds={seconds} />
      </div>
    </>
  );
};
