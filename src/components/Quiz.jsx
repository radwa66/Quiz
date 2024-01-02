import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelecteAnswer = useCallback(function handleSelecteAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },
  []);
  // becouse we used useEffect and this function creates a new element every time it render so we need to usecallback hook to prevent it
  const handleSkipAnswer = useCallback(() => handleSelecteAnswer(null), []);

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        //we added key becouse the key makes thew old version destroy and create new one whenever change is made
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelecteAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
