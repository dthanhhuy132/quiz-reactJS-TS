import "./clock.css";

import React, { useContext, useEffect, useState } from "react";
import useTimer from "./timer";
import formatTimer from "./formatTimer";
import setProgress from "./clockProgress";
import { PageContext } from "../../Provider/Provider";

interface ClockProps {
  m?: number;
  s?: number;
  newQuestion?: number;
  handleTimeOut: () => void;
  isSubmitted?: boolean;
}

const Clock: React.FC<ClockProps> = ({
  m = 0,
  s = 20,
  handleTimeOut,
  isSubmitted,
}) => {
  const { pageRouter } = useContext(PageContext);

  const [isShortTime, setIsShortTime] = useState(false);
  let { time, startTimer, stopTimer } = useTimer(m * 60 + s);
  if (time > 0) {
    startTimer();
  }

  if (time === 0) {
    stopTimer();
    handleTimeOut();
  }

  const { minute, second } = formatTimer(time);

  let curSecond = minute * 60 + second;
  let totalSecs = m * 60 + s;

  if (curSecond >= 0) {
    let perc = Math.ceil(((totalSecs - curSecond) / totalSecs) * 100);
    setProgress(perc);

    if (curSecond < 10) {
      if (!isShortTime) setIsShortTime(true);
    }
  }

  useEffect(() => {
    if (pageRouter === "end-page" || curSecond === 0) {
      stopTimer();
    }
  }, [pageRouter, curSecond]);

  if (curSecond === 0) {
  }
  return (
    <div className="clock">
      {curSecond === 0 || isSubmitted ? (
        <span className="clock__time clock__minute">End</span>
      ) : (
        <>
          <span className="clock__time clock__minute">
            {minute.toString().padStart(2, "0")}:
          </span>
          <span className="clock__time clock__second">
            {second.toString().padStart(2, "0")}
          </span>
        </>
      )}

      <svg className="progress-ring" height={120} width={120}>
        <circle
          className={`progress-ring__circle ${
            isShortTime && "progress-ring__circle--danger"
          }`}
          strokeWidth={10}
          strokeLinecap="round"
          fill="transparent"
          r={50}
          cx={60}
          cy={60}
        />
      </svg>
    </div>
  );
};

export default Clock;
