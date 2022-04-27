import TypingTest from "./components/TypingTest";
import useTypingTest from "./hooks/useTypingTest";
import { GlobalStyles } from "./components/styled/Global";
import {ThemeProvider} from "styled-components"
  
function App() {

  const {testData, textBoxRef, startGame, resetGame, getInput} = useTypingTest()
  const theme = {
    black: "#121212",
    white: "#ffffff",
    blackish: "#181818",
    grey: "#282828",
    lightGrey: "#404040",
    green:"#577590",
    orange: "#D56F3E",


  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TypingTest
          time={testData.timeRemaining}
          txtBxRef={textBoxRef}
          start={startGame}
          handleChange={getInput}
          wordCount={testData.wordCount}
          timeRemaining={testData.timeRemaining}
          reset={resetGame}
        />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
