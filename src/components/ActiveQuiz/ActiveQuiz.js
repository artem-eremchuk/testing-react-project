import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {

  const {quizLength, quiz, onAnswerClickHandler} = props;
  const {id, question, answers} = quiz;

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <strong>{id}.</strong>
        <span>{question}</span>
        <small>{id} из {quizLength}</small>
      </p>
      <AnswersList 
        answers={answers}
        onAnswerClickHandler={onAnswerClickHandler}
      />
    </div>
  );
}

export default ActiveQuiz;

