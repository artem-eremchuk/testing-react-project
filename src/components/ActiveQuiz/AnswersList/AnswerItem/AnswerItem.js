import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({answer, onAnswerClickHandler}) => {

  return (
    <li 
      className={`${classes.AnswerItem} ${answer.answerColor}`}
      onClick={() => onAnswerClickHandler(answer.id)}
    >
      {answer.text}
    </li>
  );
}

export default AnswerItem;