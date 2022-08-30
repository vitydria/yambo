import { useState } from "react";

const useStart = () => {
  const [start, setStart] = useState(
    window.sessionStorage.getItem("start")
      ? JSON.parse(window.sessionStorage.getItem("start"))
      : false
  );

  const handleStart = (state) => {
    window.sessionStorage.setItem("start", JSON.stringify(state));
    setStart(state);
  };

  return { start, setStart, handleStart };
};

export default useStart;
