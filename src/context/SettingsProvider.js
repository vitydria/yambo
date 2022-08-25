import { useState } from "react";
// Context
import SettingsContext from "./SettingsContext";

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({});
  const context = {
    settings,
    setSettings,
  };

  return (
    <SettingsContext.Provider value={context}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
