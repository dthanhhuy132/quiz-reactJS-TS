import "./start-screen.css";

import React, { useState } from "react";
import Button from "../Common/Button";

interface StartScreen {
  title: string;
  subTitle?: string;
}

const StartScreen: React.FC<StartScreen> = ({ title, subTitle }) => {
  const [isStartGame, setStartGame] = useState(false);

  function handleStartGame() {
    setStartGame(!isStartGame);
  }

  return (
    <div
      className={`start-screen-wrapper ${
        isStartGame ? "start-screen-show" : "start-screen-close"
      }`}
    >
      {isStartGame && (
        <div className="start-screen">
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <Button primary handleOnClick={handleStartGame}>
            Start
          </Button>
        </div>
      )}
    </div>
  );
};

export default StartScreen;
