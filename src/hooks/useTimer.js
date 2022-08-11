import { useState, useEffect } from "react";

const useTimer = ({ setWon }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds === 0) {
      setWon(true);
    }

    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return { seconds };
};

export default useTimer;
