import { useState } from "react";
import "./App.css";
import EndScreen from "./Components/EndSceen";
import GameBoard from "./Components/GameBoard";
import StartScreen from "./Components/StartScreen";

const App: React.FC = () => {
  return (
    <div className="App">
      <StartScreen
        title="Wellcome to Quiz Game"
        subTitle="With React and Typescript"
      />
      <GameBoard />

      <EndScreen />
    </div>
  );
};

export default App;
