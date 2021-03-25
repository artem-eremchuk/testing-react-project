import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({answer, onAnswerClickHandler}) => {

  const cls = [classes.AnswerItem, classes[answer.answerColor]];
  
  return (
    <li 
      className={cls.join(' ')}
      onClick={() => onAnswerClickHandler(answer.id)}
    >
      {answer.text}
    </li>
  );
}

export default AnswerItem;