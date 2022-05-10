import "./question.css";

import React from "react";

interface QuestionProps {
  question: string;
  questionIndex: number;
  totalQuestion: number;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return <div className="question">{question}</div>;
};

export default Question;
