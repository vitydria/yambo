//react-router
import { Routes, Route } from "react-router-dom";
//provider
import SettingsProvider from "./context/SettingsProvider";
//pages
import Main from "./pages/main/Main";
import Scratch from "./pages/scratch-game/Scratch";
import Smash from "./pages/smash-button-game/Smash";
import CreateGame from "./pages/create-game/CreateGame";
import MoreGames from "./pages/more-games/MoreGames";
//styles
import "./styles/_globals.scss";
import "./styles/_variables.scss";

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="smash-button-game" element={<Smash />} />
          <Route path="scratch-game" element={<Scratch />} />
          <Route path="more-games" element={<MoreGames />} />
          <Route path="create-game" element={<CreateGame />} />
        </Routes>
      </SettingsProvider>
    </div>
  );
}
export default App;
