import { useEffect, useState } from "react";

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
    setPrizes((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    window.sessionStorage.setItem("prizes", JSON.stringify(prizes));
  }, [prizes.prizeOne, prizes.prizeTwo, prizes.prizeThree, prizes.prizeFour]);

  return { prizes, handlePrizes };
};

export default usePrizes;
