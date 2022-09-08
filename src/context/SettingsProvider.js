import { useEffect, useState } from "react";
//context
import SettingsContext from "./SettingsContext";
//utils
import { getValue, setValue } from "../utils/sessionstorage";

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(getValue("settings", {}));

  const context = {
    settings,
    setSettings,
  };

  useEffect(() => {
    if (settings !== {}) {
      setValue("settings", settings);
    }
  }, [settings]);

  return (
    <SettingsContext.Provider value={context}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
