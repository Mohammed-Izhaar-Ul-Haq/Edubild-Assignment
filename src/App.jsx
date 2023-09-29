import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";
import Question from "./assets/components/question";
import Answer from "./assets/components/answer";

function App() {
  const questionData = {
    id: 1,
    text: 'What is your favorite programming language?',
  };
  
  return (
    <>
     <div id="canvas">
     <Question 
      questionNumber={questionData.id}
      questionText={questionData.text}
     />
    </div>
    <Answer/>
    </>
  );
}

export default App;
