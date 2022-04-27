import React, { useState, useEffect, useRef } from "react";

const useTypingTest = () => {
  const START_TIME = 60;

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
        ...prevState,
        timeRemaining: START_TIME,
        isTimerRunning: true,
        usrInput: "",
      };
    });
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  };

  const endGame = () => {
    textBoxRef.current.disabled = true;
    const count = getWordCount();
    setTestData((prevState) => {
      return {
        ...prevState,
        timeRemaining: 0,
        isTimerRunning: false,
        wordCount: `${count} words per minute`,
      };
    });
  };

  const resetGame = () => {
    setTestData((prevState) => {
      return {
        timeRemaining: START_TIME,
        isTimerRunning: false,
        usrInput: "",
        wordCount: 0,
      };
    });
  }

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

  return { testData, textBoxRef, startGame, endGame, resetGame, getWordCount, getInput }
};

export default useTypingTest
