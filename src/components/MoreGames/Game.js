import React from "react";

export const Game = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          border: "10px red solid",
          width: "80px",
          height: "80px",
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <p>Score in the top 200, get 20% off</p>
        <p>Offered by Walmart</p>
      </div>
    </div>
  );
};
