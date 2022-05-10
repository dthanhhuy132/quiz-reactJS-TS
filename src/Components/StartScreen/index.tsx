import "./start-screen.css";

import React, { useContext, useState } from "react";
import Button from "../Common/Button";
import { PageContext } from "../Provider/Provider";

interface StartScreen {
  title: string;
  subTitle?: string;
}

const StartScreen: React.FC<StartScreen> = ({ title, subTitle }) => {
  const { pageRouter, setPageRouter } = useContext(PageContext);

  function handleStartGame() {
    setPageRouter("");
  }

  return (
    <div
      className={`start-screen-wrapper ${
        pageRouter === "start-page" ? "start-screen-show" : "start-screen-close"
      }`}
    >
      {pageRouter === "start-page" && (
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
