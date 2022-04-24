import React, { useState, useEffect, useRef } from "react";
import Session from "./components/Session";
import Break from "./components/Break";
import Timer from "./components/Timer";
import TimerController from "./components/TimerController";

const App = () => {
  const [running, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [sessionLen, setSessionLen] = useState(25);
  const [breakLen, setBreakLen] = useState(5);
  const [timerType, setTimerType] = useState("Session");
  const beep = useRef(null);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 1) {
          beep.current.currentTime = 0;
          beep.current.play();
        }

        if (seconds === 0) {
          setMinutes((minutes) => (minutes === 0 ? 0 : minutes - 1));

          if (minutes !== 0) {
            setSeconds(59);
          } else {
            setSeconds(0);
            if (timerType === "Session") {
              setMinutes(breakLen);
              setTimerType("Break");
            }
            if (timerType === "Break") {
              setMinutes(sessionLen);
              setTimerType("Session");
            }
          }
        }
        if (seconds !== 0) {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);
    }

    if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, minutes, seconds, timerType, breakLen, sessionLen]);

  const handleIncrement = (e) => {
    if (e.target.value === "session") {
      if (timerType === "Session")
        setMinutes((minutes) => (minutes + 1 > 60 ? 60 : minutes + 1));

      setSessionLen((sessionLen) =>
        sessionLen + 1 > 60 ? 60 : sessionLen + 1
      );
    }
    if (e.target.value === "break") {
      if (timerType === "Break")
        setMinutes(minutes + 1 > 60 ? 60 : minutes + 1);

      setBreakLen((breakLen) => (breakLen + 1 > 60 ? 60 : breakLen + 1));
    }
  };

  const handleDecrement = (e) => {
    if (e.target.value === "session") {
      if (timerType === "Session")
        setMinutes(minutes - 1 < 1 ? 1 : minutes - 1);

      setSessionLen((sessionLen) => (sessionLen - 1 < 1 ? 1 : sessionLen - 1));
    }
    if (e.target.value === "break") {
      if (timerType === "Break") setMinutes(minutes - 1 < 1 ? 1 : minutes - 1);

      setBreakLen((breakLen) => (breakLen - 1 < 1 ? 1 : breakLen - 1));
    }
  };

  const handleReset = () => {
    if (sessionLen !== 25) setSessionLen(25);
    if (breakLen !== 5) setBreakLen(5);
    if (minutes !== 25) setMinutes(25);
    if (seconds !== 0) setSeconds(0);
    if (running !== false) setRunning(false);
    if (timerType !== "Session") setTimerType("Session");
    beep.current.pause();
    beep.current.currentTime = 0;
  };

  const handleStartStop = () => {
    setRunning((running) => !running);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-4 border-4 border-black bg-[#DCCCBB]">
      <div className="grid grid-cols-4 grid-rows-6 gap-1">
        <Session
          length={sessionLen}
          increment={handleIncrement}
          decrement={handleDecrement}
        />
        <Break
          length={breakLen}
          increment={handleIncrement}
          decrement={handleDecrement}
        />
        <Timer
          minutes={minutes}
          seconds={seconds}
          type={timerType}
          beep={beep}
        />
        <TimerController reset={handleReset} toggle={handleStartStop} />
      </div>
    </div>
  );
};

export default App;
