import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faStopwatch20 } from '@fortawesome/free-solid-svg-icons';
import CircularTimer from "./circulartimer";
import Answer from "./answer";

function Question({questionNumber,questionText}) {
    const [secondsRemaining, setSecondsRemaining] = useState(20);
    const [backgroundColor, setBackgroundColor] = useState("#C0DAF8");
    const [timerFinished, setTimerFinished] = useState(false);
    const [isQuestionActive, setisQuestionActive] = useState(true);
    // Start the timer when the component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        // Timer has ended, change background color to white
        
        setBackgroundColor("white");
        setisQuestionActive(false);   
        setTimerFinished(true);   
        clearInterval(timer);

      
       
      }
    }, 1000); // Update every 1 second


    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [secondsRemaining]);
  
    return (
        <div id="question" style={{ backgroundColor }}>  
        
        <p style={{marginLeft:'5px'}}> Question{questionNumber} </p><br/>
        <p style={{marginLeft:'5px'}}>{questionText}</p><br/>
        <div id="timeAndSpeakNow">
        {timerFinished ? (
            <p id="speakNow">Speak Now</p>
        ) : (
          <p style={{fontWeight:'normal',color:'gray'}}> <FontAwesomeIcon icon={faStopwatch} className="clock-icon" />Start Speaking in {secondsRemaining} seconds</p>
        )}
            </div>
        </div>
    );
    }
      
export default Question;
    
    
    