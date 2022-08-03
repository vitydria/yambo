import { Routes, Route } from "react-router-dom";
import "./App.css";

// import MainPage from "./pages/main/MainPage";
// import Scratch from "./pages/scratch-game/Scratch";
// import Smash from "./pages/smash-button-game/Smash";
// import MoreGames from "./pages/more-games/MoreGames";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="scratch-game" element={<Scratch />} />
        <Route path="smash-button-game" element={<Smash />} />
        <Route path="more-games" element={<MoreGames />} />
      </Routes>
    </div>
  );
}

function Main() {
  return <div>Main</div>;
}

function Scratch() {
  return <div>Scratch</div>;
}

function Smash() {
  return <div>Smash</div>;
}

function MoreGames() {
  return <div>More Games</div>;
}

export default App;
