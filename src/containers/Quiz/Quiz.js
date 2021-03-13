import React from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import classes from './Quiz.module.css';

class Quiz extends React.Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета небо!?',
        answers: [
          {
            id: 1,
            text: 'а'
          },
          {
            id: 2,
            text: 'б'
          },
          {
            id: 3,
            text: 'в'
          }
        ]
      }
    ]
  }

  render(){
    return(
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz quiz={this.state.quiz[0]}/>
        </div>
      </div>
    );
  }
}

export default Quiz;