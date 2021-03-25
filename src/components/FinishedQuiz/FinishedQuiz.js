import React from 'react';
// import AnswerItem from '../ActiveQuiz/AnswersList/AnswerItem/AnswerItem';
import Button from '../UI/Button/Button';
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
      <Button
        type={'error'}
        onClick={onResetTest}
        disabled={false}
      >
        Пройти тест еще раз?
      </Button>
    </div>
  );
}

export default FinishedQuiz;