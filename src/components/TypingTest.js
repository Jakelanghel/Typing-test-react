import React from 'react'
import { StyledTypingTest } from './styled/Styled.TypingTest'

const TypingTest = (props) => {
    return (
        <StyledTypingTest>
            <h1>How fast can you type</h1>
            <textarea 
                ref={props.txtBxRef}
                onChange={props.handleChange}
            />
            <h2>Time remaining:{props.time} </h2>
            <button onClick={props.start}>Start</button>
            <h2>Word count: {props.wordCount}</h2>
        </StyledTypingTest>
    )
}

export default TypingTest