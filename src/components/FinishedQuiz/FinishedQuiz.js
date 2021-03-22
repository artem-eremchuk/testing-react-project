import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({onResetTest}) => {
  return (
    <div className={classes.FinishedQuiz}>
      <h2>Здесь будет результат</h2>
      <button onClick={() => onResetTest()}>
        Пройти тест еще раз
      </button>
    </div>
  );
}

export default FinishedQuiz;