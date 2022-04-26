import React, { useState, useEffect, useRef } from "react";

const useTypingTest = () => {
  const START_TIME = 2;

  const [testData, setTestData] = useState({
    timeRemaining: START_TIME,
    isTimerRunning: false,
    usrInput: "",
    wordCount: 0,
  });

  const textBoxRef = useRef(null);

  const startGame = () => {
    setTestData((prevState) => {
      return {
        timeRemaining: START_TIME,
        isTimerRunning: true,
        usrInput: "",
      };
    });
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  };

  const endGame = () => {
    const count = getWordCount();
    setTestData((prevState) => {
      return {
        timeRemaining: START_TIME,
        isTimerRunning: false,
        usrInput: "",
        wordCount: count,
      };
    });
  };

  const getWordCount = () => {
    const wordsArr = testData.usrInput.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  const getInput = (e) => {
    const input = e.target.value;
    setTestData((prevState) => ({ ...prevState, usrInput: input }));
  };

  useEffect(() => {
    if (testData.isTimerRunning && testData.timeRemaining > 0) {
      setTimeout(() => {
        setTestData((prevState) => ({
          ...prevState,
          timeRemaining: testData.timeRemaining - 1,
        }));
      }, 1000);
    } else if (testData.timeRemaining === 0) {
      endGame();
    }
  }, [testData.timeRemaining, testData.isTimerRunning]);

  return { testData, textBoxRef, startGame, endGame, getWordCount, getInput }
};

export default useTypingTest