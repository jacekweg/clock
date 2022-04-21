import React, { useState } from "react";
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

  const handleIncrement = (e) => {
    if (e.target.value === "session") {
      setMinutes((minutes) => (minutes === 60 ? 60 : minutes + 1));
      setSessionLen((sessionLen) => (sessionLen === 60 ? 60 : sessionLen + 1));
    } else {
      setBreakLen((breakLen) => (breakLen === 60 ? 60 : breakLen + 1));
    }
  };

  const handleDecrement = (e) => {
    if (e.target.value === "session") {
      setMinutes(minutes === 60 ? 60 : minutes - 1);
      setSessionLen((sessionLen) => (sessionLen === 1 ? 1 : sessionLen - 1));
    } else {
      setBreakLen((breakLen) => (breakLen === 1 ? 1 : breakLen - 1));
    }
  };

  const handleReset = () => {
    if (sessionLen !== 25) setSessionLen(25);
    if (breakLen !== 5) setBreakLen(5);
    setMinutes(25);
    setSeconds(0);
    if (running === true) setRunning(false);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-4 border-4 border-black">
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
        <Timer minutes={minutes} seconds={seconds} />
        <TimerController reset={handleReset} />
      </div>
    </div>
  );
};

export default App;
