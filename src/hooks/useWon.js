import { useState, useEffect } from "react";

const useWon = () => {
  const [won, setWon] = useState(
    window.sessionStorage.getItem("start")
      ? JSON.parse(window.sessionStorage.getItem("start"))
      : false
  );

  useEffect(() => {
    window.sessionStorage.setItem("prizes", JSON.stringify(won));
  }, [won]);

  return { won, setWon };
};

export default useWon;
