import "./game-board.css";

import React, { useContext, useEffect, useState } from "react";
import Button from "../Common/Button";
import Question from "../GameBoard/Question";
import questions from "../../mockData";

import Answer from "./Answer";
import Clock from "./Clock";
import PopUp from "../Popup";
import { PageContext } from "../Provider/Provider";
import handleMarkRusult from "./handleMark";
import getAllCorrectAnswer from "./getCorrectAnswer";

const userAnser: number[] = [];

const GameBoard: React.FC = () => {
  const { pageRouter, setPageRouter, setTotalScore, totalScore } =
    useContext(PageContext);

  const [numberQuestion, setNumberQuestion] = useState(0);
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [checkUserChooseAnser, setCheckUserChooseAnser] = useState<number>(10);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);

  const [timeOut, setTimeOut] = useState(false);

  function handleOnClickAnswer(index: number) {
    userAnser[numberQuestion] = index;
    setCheckUserChooseAnser(index);
  }

  function handlePreviousQuestion() {
    setNumberQuestion((pre) => pre - 1);
    setIsLastQuestion(false);
  }

  function handleNextQuestion() {
    setNumberQuestion((pre) => pre + 1);
    setIsFirstQuestion(false);
  }

  function handleCheckTimeOut() {
    setTimeOut(true);
  }

  function handleSubmitQuestion() {
    setIsSubmitted(true);
    setIsShowPopup(false);

    let correctAnswer = getAllCorrectAnswer(questions);
    let tempScore = handleMarkRusult(userAnser, correctAnswer);
    setTotalScore(tempScore);
    setPageRouter("end-page");
  }

  useEffect(() => {}, [isSubmitted]);

  useEffect(() => {
    if (numberQuestion < 1) {
      setIsFirstQuestion(true);
    } else if (numberQuestion === questions.length - 1) {
      setIsLastQuestion(true);
    }
    setCheckUserChooseAnser(10);
  }, [numberQuestion]);

  return (
    <div className="game-board">
      <div
        className={`game-board__question 
         ${timeOut ? "is-time-out" : ""}`}
      >
        {pageRouter !== "start-page" && (
          <Clock handleTimeOut={handleCheckTimeOut} isSubmitted={isSubmitted} />
        )}

        <p className="question-index">
          <span>
            Question:{" "}
            <span className="question-index-number">{numberQuestion + 1}</span>/
            {questions.length}
          </span>
        </p>

        <Question
          question={questions[numberQuestion]["question_content"]}
          questionIndex={numberQuestion + 1}
          totalQuestion={questions.length}
        />
      </div>
      <div className="game-board__answer">
        {questions[numberQuestion].answers.map((answer: any, index: number) => {
          return (
            <Answer
              answer={answer}
              key={index}
              answerIndex={index}
              answerClick={() => handleOnClickAnswer(index)}
              check={
                checkUserChooseAnser === index ||
                userAnser[numberQuestion] === index
              }
              correctAnswerIndex={answer.correct ? index : 10}
              userSelectAnswerIndex={userAnser[numberQuestion]}
              isSubmitted={isSubmitted}
              timeOut={timeOut}
            />
          );
        })}
      </div>
      <div className="game-board__btn-control">
        <Button
          secondary
          disabled={isFirstQuestion}
          handleOnClick={handlePreviousQuestion}
        >
          Previous
        </Button>
        <Button
          primary
          disabled={isLastQuestion}
          handleOnClick={handleNextQuestion}
        >
          Next
        </Button>
      </div>
      <div className="sumit-button">
        {!isSubmitted ? (
          <Button warning handleOnClick={() => setIsShowPopup(true)}>
            Submit
          </Button>
        ) : (
          <p className="board-game-score">
            Your Score: <span>{totalScore}</span>/{questions.length}
          </p>
        )}

        <div className={`submit-popup ${isShowPopup && "popup-show"}`}>
          <PopUp
            handleClickOk={handleSubmitQuestion}
            handleClickCancel={() => setIsShowPopup(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
