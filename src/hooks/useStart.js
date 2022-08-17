import { useState } from "react";

const useStart = () => {
  const [start, setStart] = useState(false);
  return { start, setStart };
};

export default useStart;
