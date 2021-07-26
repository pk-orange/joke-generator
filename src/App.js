import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Joke from "./Components/JokeDisplay";
import Buttons from "./Components/Buttons";
import { jokeArray } from "./Components/JokeDisplay";




function App() {
  const punchLineState = {
    displayText: 'none',
    buttonDisplay: 'block',
  }
 
  console.log(jokeArray);

  const [lineIndex, setLineIndex] = useState(0);
  const [punchLineDisplay, setPunchLineDisplay] = useState(false);
  const [punchLineData, setPunchLineData] = useState({...punchLineState})

  function cycle() {
    if (lineIndex <= 4) {
      setLineIndex((index) => index + 1);
      setPunchLineData({ ...punchLineState })
    }
  }

  function showPunchLine() {
    setPunchLineDisplay((state) => !state);
    setPunchLineData({ displayText: 'block', buttonDisplay: 'none' });
  }


  return (
    <>
      <Header />
      <Joke
        lineIndex={lineIndex}
        punchLineData={punchLineData}
        cycle={cycle}
        showPunchLine={showPunchLine}/>
      </>
  )
  
}

export default App;