import { useState } from "react";

const useWon = () => {
  const [won, setWon] = useState(false);

  return { won, setWon };
};

export default useWon;
