import { useState, useEffect } from "react";
import { getValue, setValue } from "../utils/localstorage";

const useWon = () => {
  const [won, setWon] = useState(getValue("won", false));

  useEffect(() => {
    setValue("won", won);
  }, [won]);

  return { won, setWon };
};

export default useWon;
