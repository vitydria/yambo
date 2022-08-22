import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";

export function useSettingsContext() {
  return useContext(SettingsContext);
}
