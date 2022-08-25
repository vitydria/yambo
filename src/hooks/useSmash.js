import { useState } from "react";

const useSmash = () => {
  const [clicks, setClicks] = useState(0);
  return { clicks, setClicks };
};

export default useSmash;
