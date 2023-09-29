import React, { useState, useEffect } from 'react';
import Microphone from './microphone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faStopwatch } from '@fortawesome/free-solid-svg-icons';

function CircularTimer() {
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    // Delay the start of the timer by 20 seconds
    const delayTimer = setTimeout(() => {
      // Start the actual timer
      const timer = setInterval(() => {
        setTimeRemaining(prevTimeRemaining => {
          if (prevTimeRemaining > 0) {
            return prevTimeRemaining - 1;
          } else {
            clearInterval(timer);
            return prevTimeRemaining;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }, 20000); // 20 seconds

    return () => clearTimeout(delayTimer);
  }, []);

  const calculateStrokeDashoffset = () => {
    const circumference = 2 * Math.PI * 45; // 45 is the radius
    const offset = ((60 - timeRemaining) / 60) * circumference;
    return offset;
  };

  return (
    <div className="circular-timer">
      <Microphone />
      <svg className="circle" width="100" height="100">
        <circle className="circle-background" cx="50" cy="50" r="45" />

        <circle
          className={`circle-progress ${timeRemaining <= 10 ? 'orange' : ''}`}
          cx="50"
          cy="50"
          r="45"
          strokeDasharray="283"
          strokeDashoffset={calculateStrokeDashoffset()}
        />

      </svg>

      <div className="timer-text">
        Answering Time: <span className="time-left"> <FontAwesomeIcon icon={faStopwatch} className="clock-icon" />{timeRemaining} seconds <span style={{ color: 'grey', fontWeight: 'normal' }}>left</span> </span>
      </div>
      {timeRemaining <= 10 && (
        <span className="conclude-text"><FontAwesomeIcon icon={faCircleExclamation} />please start concluding your answer</span>
      )}

    </div>
  );
}

export default CircularTimer;
