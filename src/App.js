import TypingTest from "./components/TypingTest";
import useTypingTest from "./hooks/useTypingTest"

function App() {

  const {testData, textBoxRef, startGame, getInput} = useTypingTest()
  
  return (
    <div>
      <TypingTest
        time={testData.timeRemaining}
        txtBxRef={textBoxRef}
        start={startGame}
        handleChange={getInput}
        wordCount={testData.wordCount}
      />
    </div>
  );
}

export default App;
