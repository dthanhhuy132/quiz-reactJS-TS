function setProgress(percent) {
  const circle = document.querySelector(".progress-ring__circle");
  if (circle) {
    let radius = circle.r.baseVal.value;

    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;
    if (circle) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  }
}

export default setProgress;
