import "./answer.css";

import React from "react";

interface AnswerProps {
  answer: any;
  answerIndex: number;
  answerClick: () => void;
  check: boolean;
  timeOut?: boolean;
  isSubmitted?: boolean;
  userSelectAnswerIndex?: number;
  correctAnswerIndex?: number;
}

const Answer: React.FC<AnswerProps> = ({
  answer,
  answerIndex,
  answerClick,
  check = false,
  timeOut = true,
  isSubmitted,
  userSelectAnswerIndex,
  correctAnswerIndex,
}) => {
  const answerKey = ["a", "b", "c", "d"];

  function handleMouseOver(e: any): void {
    if (e.target.className === "answer-text") return;
    e.target.classList.add("answer-active");
  }

  function handleMouseLeave(e: any): void {
    if (e.target.className === "answer-text") return;
    e.target.classList.remove("answer-active");
  }

  const checkAnswerAfterSubmitted =
    isSubmitted && userSelectAnswerIndex === correctAnswerIndex;

  const userWrong =
    isSubmitted &&
    userSelectAnswerIndex === answerIndex &&
    !checkAnswerAfterSubmitted;

  return (
    <div
      className={`answer 
      ${check ? "answer-check" : ""}
      ${timeOut ? "answer-disabled" : ""}
      ${checkAnswerAfterSubmitted && "answer-correct"}
      ${userWrong && "answer-incorrect"}
      
      
      `}
      onMouseOver={(e) => handleMouseOver(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      onClick={answerClick}
    >
      {answerKey[answerIndex]}.{" "}
      <span className="answer-text">{answer["answer_content"]}</span>
      {isSubmitted && correctAnswerIndex === answerIndex && (
        <i className="fa-solid fa-circle-check answer-icon answer-icon-correct" />
      )}
      {userWrong && (
        <i className="fa-solid fa-circle-xmark answer-icon answer-icon-incorrect"></i>
      )}
    </div>
  );
};

export default Answer;
