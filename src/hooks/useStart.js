import { useState, useEffect } from "react";
import { getValue, setValue } from "../utils/sessionstorage";

const useStart = () => {
  const [start, setStart] = useState(getValue("start", false));

  useEffect(() => {
    setValue("start", start);
  }, [start]);

  return { start, setStart };
};

export default useStart;
