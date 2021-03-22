import React from 'react';
// import AnswerItem from '../ActiveQuiz/AnswersList/AnswerItem/AnswerItem';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({quiz, onResetTest}) => {
  const userAnswers = quiz.map((userAnswer) => {
    return (
      <div key={userAnswer.id}>
        {`Вопрос ${userAnswer.id} ---> ${userAnswer.userAnswer}`}
      </div>
    );
  })

  return (
    <div className={classes.FinishedQuiz}>
      <h2>Ваши результаты теста</h2>
      {userAnswers}
      <button onClick={() => onResetTest()}>
        Пройти тест еще раз
      </button>
    </div>
  );
}

export default FinishedQuiz;