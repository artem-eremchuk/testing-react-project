import React from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import AnswerItem from '../../components/ActiveQuiz/AnswersList/AnswerItem/AnswerItem.module.css'
import classes from './Quiz.module.css';

class Quiz extends React.Component {
  state = {
    activeQuestion: 0,
    isFinished: false,
    quiz: [
      {
        id: 1,
        question: 'React JS это...',
        answers: [
          {
            id: 1,
            text: 'MVC-фреймворк',
            answerColor: ''
          },
          {
            id: 2,
            text: 'Фреймворк',
            answerColor: ''
          },
          {
            id: 3,
            text: 'JavaScript библиотека',
            answerColor: ''
          }
        ],
        userAnswer: '',
        rightAnswerId: 3
      },
      {
        id: 2,
        question: 'Где правильно выведен компонент через рендер?',
        answers: [
          {
            id: 1,
            text: '<Test>',
            answerColor: ''
          },
          {
            id: 2,
            text: '<Test />',
            answerColor: ''
          },
          {
            id: 3,
            text: '</ Test>',
            answerColor: ''
          }
        ],
        userAnswer: '',
        rightAnswerId: 2
      },
      {
        id: 3,
        question: 'Какой метод отвечает за вывод информации?',
        answers: [
          {
            id: 1,
            text: 'render',
            answerColor: ''
          },
          {
            id: 2,
            text: 'react',
            answerColor: ''
          },
          {
            id: 3,
            text: 'ReactDOM',
            answerColor: ''
          }
        ],
        userAnswer: '',
        rightAnswerId: 1
      }
    ]
  }

  onAnswerClickHandler = (id) => {
    const quiz = this.state.quiz;
    const activeQuestion = this.state.activeQuestion + 1;
    
    if(this.state.quiz[this.state.activeQuestion].rightAnswerId === id){

      if (activeQuestion >= this.state.quiz.length){
        quiz[this.state.activeQuestion].answers[--id].answerColor = AnswerItem.success;

        this.setState({
          quiz: quiz
        })

        setTimeout(
          () => {
            quiz[this.state.activeQuestion].answers.map((answer) => {
              answer.answerColor = '';
            })

            this.setState({
              isFinished: true,
            })
          }, 1000
        );

      } else {
        quiz[this.state.activeQuestion].answers[--id].answerColor = AnswerItem.success;

        this.setState({
          quiz: quiz
        })

        setTimeout(
          () => {
            quiz[this.state.activeQuestion].answers.map((answer) => {
              answer.answerColor = '';
            })

            this.setState({ 
              activeQuestion: this.state.activeQuestion + 1,
              quiz: quiz
            })
          }, 1000
        );       
      }
      
    } else {
      quiz[this.state.activeQuestion].answers[--id].answerColor = AnswerItem.error;

      this.setState({
        quiz: quiz
      })
    }
  }

  // Сбросить тест пройти еще раз
  onResetTest = () =>{
    this.setState({
      activeQuestion: 0,
      isFinished: false
    })
  }

  render(){
    return(
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {
            (this.state.isFinished) 
              ? <FinishedQuiz 
                  onResetTest={this.onResetTest}
                /> 
              : <ActiveQuiz 
                  quiz={this.state.quiz[this.state.activeQuestion]}
                  onAnswerClickHandler={this.onAnswerClickHandler}
                  quizLength={this.state.quiz.length}
                />
          }
        </div>
      </div>
    );
  }
}

export default Quiz;