import React from "react";
import { useState,useEffect } from "react";
import CircularTimer from "./circulartimer";


function Answer() {
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const [backgroundColor, setBackgroundColor] = useState("#C0DAF8");
  const [timerFinished, setTimerFinished] = useState(false);
  
  // Start the timer when the component mounts
useEffect(() => {
  const timer = setInterval(() => {
    if (secondsRemaining > 0) {
      setSecondsRemaining(secondsRemaining - 1);
    } else {
      // Timer has ended, change background color to white
      setBackgroundColor("white");     
      setTimerFinished(true);   
      clearInterval(timer);
    }
  }, 1000); // Update every 1 second

  // Clean up the timer when the component unmounts
  return () => clearInterval(timer);
}, [secondsRemaining]);
    return (
        <div id="answer" style={{ backgroundColor }}>

          <CircularTimer />
        </div>
      
    );
  }
  
  export default Answer;


