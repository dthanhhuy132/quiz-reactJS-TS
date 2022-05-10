function handleMarkRusult(userAnser:number[], correctAnswer:number[]) {
  let score = 0;
  userAnser.forEach((userKey, index) => {
    if (userKey === correctAnswer[index]) {
      score += 1;
    }
  });

  return score;
}

export default handleMarkRusult

