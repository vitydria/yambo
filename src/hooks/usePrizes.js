import { useEffect, useState } from "react";
import { getValue, setValue } from "../utils/sessionstorage";

const usePrizes = () => {
  const [prizes, setPrizes] = useState(
    getValue("prizes", {
      prizeOne: "",
      prizeTwo: "",
      prizeThree: "",
      prizeFour: "",
    })
  );

  const handlePrizes = (key, value) => {
    setPrizes((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    setValue("prizes", prizes);
  }, [prizes.prizeOne, prizes.prizeTwo, prizes.prizeThree, prizes.prizeFour]);

  return { prizes, handlePrizes };
};

export default usePrizes;
