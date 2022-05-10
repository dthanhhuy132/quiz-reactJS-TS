import { useEffect, useState } from "react";

const useTimer = (startTime: number) => {
  const [time, setTime] = useState(startTime);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null);
  const hasTimerEnded = time <= 0;
  const isTimerRunning = intervalID != null;

  const update = () => {
    setTime((time) => time - 1);
  };
  const startTimer = () => {
    if(time === 0) return;
    if (!hasTimerEnded && !isTimerRunning) {
      let timerId = setInterval(update, 1000);
      setIntervalID(timerId);
    }
  };

  const stopTimer = () => {
    if(time === 0) return;
    if (intervalID) {
      clearInterval(intervalID);
      setIntervalID(null);
    }
  };

  useEffect(() => {
    if (hasTimerEnded && intervalID) {
      clearInterval(intervalID);
      setIntervalID(null);
    }

    return () => {
      if (hasTimerEnded && intervalID) {
        clearInterval(intervalID);
        setIntervalID(null);
      }
    };
  }, [hasTimerEnded]);

  return {
    time,
    startTimer,
    stopTimer,
  };
};

export default useTimer;
