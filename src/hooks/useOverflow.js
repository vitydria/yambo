import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useOverflow = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/scratch-game") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, []);
};
