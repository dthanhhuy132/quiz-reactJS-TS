function formatTimer(time: number) {
  let minute;
  let second;
  if (time >= 60) {
    minute = Math.floor(time / 60);
    second = time - minute * 60;
  } else {
    minute = 0;
    second = time;
  }
  return { minute, second };
}

export default formatTimer