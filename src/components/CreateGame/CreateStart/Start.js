import React from "react";

export const Start = ({ setStart }) => {
  const start = () => {
    setStart(true);
  };
  return (
    <div>
      <h1>Set game</h1>
      <button onClick={start}>Start</button>
      <p>yambo</p>
    </div>
  );
};
