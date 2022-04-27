import React from "react";
import { StyledTypingTest } from "./styled/Styled.TypingTest";

const TypingTest = (props) => {
  return (
    <StyledTypingTest>
      <h1>How fast can you type ?</h1>
      <textarea
        ref={props.txtBxRef}
        onChange={props.handleChange}
        disabled={true}
      />
      <div className="container-actions">
        <div className="score-board">
          <h2>
            Time remaining: <span>{props.time}</span>
          </h2>
          <h2>
            Word count: <span>{props.wordCount}</span>
          </h2>
        </div>

        <button onClick={props.timeRemaining > 0 ? props.start : props.reset}>
          {props.timeRemaining > 0 ? "Start" : "Reset"}
        </button>
      </div>
    </StyledTypingTest>
  );
};

export default TypingTest;
