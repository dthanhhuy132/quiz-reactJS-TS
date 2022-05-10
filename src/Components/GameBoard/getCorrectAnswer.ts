function getAllCorrectAnswer(questions: any) {

  let correctAnswer:number[] = [];
  questions.forEach((question: any, qIndex:number) => {
    question.answers.forEach((answer:any, aIndex:number) => {
      if (answer.correct) {
        correctAnswer.push(aIndex);
      }
    });
  });
  return correctAnswer;
}


export default getAllCorrectAnswer