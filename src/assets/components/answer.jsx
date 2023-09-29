import React, { useState, useEffect } from "react";
import CircularTimer from "./circulartimer";

function Answer() {
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const [backgroundColor, setBackgroundColor] = useState("#80808080"); 
  const [timerFinished, setTimerFinished] = useState(false);

  // Delay the start of the timer by 20 seconds
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      // After the delay, change background color to blue when the timer starts
      setBackgroundColor("#C0DAF8");
      
      // Start the timer after the delay
      const timer = setInterval(() => {
        if (secondsRemaining > 0) {
          setSecondsRemaining(secondsRemaining - 1);
        } 
          else {
          // Timer has ended
          setBackgroundColor("#80808080");
          setTimerFinished(true);
          clearInterval(timer);
        }
      }, 1000); // Update every 1 second

      // Clean up the timer when the component unmounts
      return () => clearInterval(timer);
    }, 20000); // 20 seconds

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <div id="answer" style={{ backgroundColor }}>
      <CircularTimer />
    </div>
  );
}

export default Answer;
