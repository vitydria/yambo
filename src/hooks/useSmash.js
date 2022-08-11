import { useState } from "react";

const useSmash = () => {
  const [start, setStart] = useState(false);
  const [clicks, setClicks] = useState(0);
  return { start, setStart, clicks, setClicks };
};

export default useSmash;
