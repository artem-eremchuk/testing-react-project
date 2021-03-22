import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswersList.module.css';


const AnswersList = ({answers, onAnswerClickHandler}) => {

  return (
    <ul className={classes.AnswersList}>
      {answers.map((answer) => {
        return (
          <AnswerItem 
            key={answer.id}
            answer={answer}
            onAnswerClickHandler={onAnswerClickHandler}
          />
        );
      })}
    </ul>
  );
}

export default AnswersList;