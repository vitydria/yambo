import { useEffect, useState } from "react";
// Context
import SettingsContext from "./SettingsContext";

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(
    window.sessionStorage.getItem("settings")
      ? JSON.parse(window.sessionStorage.getItem("settings"))
      : {}
  );
  const context = {
    settings,
    setSettings,
  };

  useEffect(() => {
    if (settings !== {}) {
      window.sessionStorage.setItem("settings", JSON.stringify(settings));
    }
  }, [settings]);

  return (
    <SettingsContext.Provider value={context}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
