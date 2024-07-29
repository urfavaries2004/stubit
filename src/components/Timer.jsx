import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleSecondsChange = (event) => {
    setSeconds(event.target.value);
  };

  const startTimer = () => {
    const totalSeconds =
      parseInt(hours, 10) * 3600 +
      parseInt(minutes, 10) * 60 +
      parseInt(seconds, 10);

    if (!isNaN(totalSeconds) && totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsActive(true);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(null);
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  return (
    <div className="timer">
      <div className="timer-input">
        <input
          className="hours"
          type="number"
          value={hours}
          onChange={handleHoursChange}
          placeholder="HH"
          min="0"
        />
        <input
          className="minutes"
          type="number"
          value={minutes}
          onChange={handleMinutesChange}
          placeholder="MM"
          min="0"
          max="59"
        />
        <input
          className="seconds"
          type="number"
          value={seconds}
          onChange={handleSecondsChange}
          placeholder="SS"
          min="0"
          max="59"
        />
      </div>
      <button className="start-timer" onClick={startTimer}>
        Start
      </button>
      <button className="reset-timer" onClick={resetTimer}>
        Reset
      </button>
      {timeLeft !== null && (
        <div className="time-left">
          <h2>
            Time Left: {new Date(timeLeft * 1000).toISOString().substr(11, 8)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Timer;
