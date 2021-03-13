import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = ({quiz}) => {

  const {question, answers} = quiz;

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <strong>1</strong>
        <span>{question}</span>
        <small>1 из 2</small>
      </p>
      <AnswersList answers={answers}/>
    </div>
  );
}

export default ActiveQuiz;

