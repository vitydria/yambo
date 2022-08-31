import { useState, useEffect } from "react";

const useStart = () => {
  const [start, setStart] = useState(
    window.sessionStorage.getItem("start")
      ? JSON.parse(window.sessionStorage.getItem("start"))
      : false
  );

  useEffect(() => {
    window.sessionStorage.setItem("start", JSON.stringify(start));
  }, [start]);

  return { start, setStart };
};

export default useStart;
