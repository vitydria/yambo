import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";
import Scratch from "./pages/scratch-game/Scratch";
import Smash from "./pages/smash-button-game/Smash";
import MoreGames from "./pages/more-games/MoreGames";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="smash-button-game" element={<Smash />} />
        <Route path="scratch-game" element={<Scratch />} />
        <Route path="more-games" element={<MoreGames />} />
      </Routes>
    </div>
  );
}
export default App;
