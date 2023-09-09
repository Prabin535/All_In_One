import React, { useRef, useState, useEffect } from "react";
import BackBtn from "../BackBtn";

export default function Stopwatch() {
  const MILLISECONDS_PER_SECOND = 60;
  const SECONDS_PER_MINUTE = 60;
  const MINUTES_PER_HOUR = 60;
  const [countMiliSec, setCountMiliSec] = useState(0);
  const [countSec, setCountSec] = useState(0);
  const [countMin, setCountMin] = useState(0);
  const [countHour, setCountHour] = useState(0);
  const [timer, setTimer] = useState(false);

  const startStopHandler = () => {
    setTimer(!timer);
  };

  useEffect(() => {
    let intervalId;
    if (timer) {
      intervalId = setInterval(() => {
        setCountMiliSec((c) => c + 1);
      }, 10);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  useEffect(() => {
    if (timer && countMiliSec === MILLISECONDS_PER_SECOND) {
      setCountMiliSec(0);
      setCountSec((c) => c + 1);

      if (countSec === SECONDS_PER_MINUTE) {
        setCountSec(0);
        setCountMin((c) => c + 1);

        if (countMin === MINUTES_PER_HOUR) {
          setCountMin(0);
          setCountHour((c) => c + 1);
        }
      }
    }
  }, [timer, countMiliSec, countSec, countMin]);

  return (
    <div className="section1b">
      <BackBtn back={"/"} />
      <div className="timerCount">
        {countHour.toString().padStart(2, "0")}:
        {countMin.toString().padStart(2, "0")}:
        {countSec.toString().padStart(2, "0")}.
        <div className="countMiliSec">
          {countMiliSec.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="btnDiv">
        <button onClick={startStopHandler} className="convBtn">
          Start
        </button>
        <button onClick={startStopHandler} className="convBtn">
          Stop
        </button>
      </div>
    </div>
  );
}
