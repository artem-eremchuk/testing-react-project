import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({text}) => {
  return (
    <li className={classes.AnswerItem}>{text}</li>
  );
}

export default AnswerItem;