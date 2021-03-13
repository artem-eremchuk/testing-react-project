import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswersList.module.css';


const AnswersList = ({answers}) => {



  return (
    <ul className={classes.AnswersList}>
      {answers.map((answer) => {
        return (
          <AnswerItem 
            key={answer.id}
            text={answer.text}
          />
        );
      })}
    </ul>
  );
}

export default AnswersList;