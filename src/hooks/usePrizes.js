import { useState } from "react";

const usePrizes = () => {
  const [prizes, setPrizes] = useState(
    window.sessionStorage.getItem("prizes")
      ? JSON.parse(window.sessionStorage.getItem("prizes"))
      : {
          prizeOne: "",
          prizeTwo: "",
          prizeThree: "",
          prizeFour: "",
        }
  );

  const handlePrizes = (key, value) => {
    setPrizes((oldState) => {
      oldState[key] = value;
      return oldState;
    });

    window.sessionStorage.setItem("prizes", JSON.stringify(prizes));
  };

  return { prizes, setPrizes, handlePrizes };
};

export default usePrizes;
