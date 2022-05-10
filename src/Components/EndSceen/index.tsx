import "./end-screen.css";

import React, { useContext } from "react";
import Button from "../Common/Button";
import { PageContext } from "../Provider/Provider";

const EndScreen: React.FC = () => {
  const { pageRouter, setPageRouter, totalScore, setTotalScore } =
    useContext(PageContext);

  function handleTryAgain() {
    window.location.reload();
  }

  function handleReview() {
    setPageRouter("");
  }

  return (
    <div
      className={`end-screen ${
        pageRouter === "end-page" ? "end-screen-show" : ""
      }`}
    >
      <div className="end-screen-container">
        <h1 className="end-screen-text">
          Your score: <span className="end-screen-score">{totalScore}</span>
        </h1>

        <div className="end-screen-button">
          <Button handleOnClick={handleTryAgain} secondary>
            Try Again
          </Button>
          <Button handleOnClick={handleReview} primary>
            Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
