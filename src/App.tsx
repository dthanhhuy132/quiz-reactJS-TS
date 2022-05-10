import { useContext, useState } from "react";
import "./App.css";
import EndScreen from "./Components/EndSceen";
import GameBoard from "./Components/GameBoard";
import { PageContext } from "./Components/Provider/Provider";
import StartScreen from "./Components/StartScreen";

const App: React.FC = () => {
  const { pageRouter, setPageRouter } = useContext(PageContext);

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
