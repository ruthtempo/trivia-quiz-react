import React, { useState } from 'react';
import { fetchQuizQuestions } from './components/Api';
//components
import QuestionCard from './components/QuestionCard';
//types
import { QuestionsState, Difficulty } from './components/Api'


//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss'
import Button from 'react-bootstrap/Button'
import { GlobalStyle } from './app.styles';
import { Wrapper } from './app.styles';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/380/200')
  const [random, setRandom] = useState(0)
  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  const getRandom = () => {
    const randomNumber = Math.floor(Math.random() * 200)
    setRandom(randomNumber)
    console.log({ random })
  }

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false)
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = e.currentTarget.value;
      //CHECK ANSWER against correct answer
      const correct = questions[number].correct_answer == answer
      //add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,

      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }
  const nextQuestion = () => {
    // move on to the next question if its not the last question
    const nextQuestion = number + 1;
    setImageUrl(`https://picsum.photos/id/${random}/400/200`)

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion)
    }
  }
  return (
    <>
      <GlobalStyle />
      < Wrapper className='App' >
        <h1> Trivia Quiz</h1>
        { }
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <Button variant="primary" className="start text-info" onClick={startTrivia}>New Game</Button>
        ) : null
        }
        {userAnswers.length === TOTAL_QUESTIONS ? <h5 className="over"> GAME OVER</h5> : null}
        {!gameOver ? <h5 className='score'>Score: {score}</h5> : null}
        {!gameOver && userAnswers.length !== TOTAL_QUESTIONS ? <img src={imageUrl} alt="pic" /> : null}
        {loading && <p>Loading questions...</p>}
        {!loading && !gameOver && userAnswers.length !== TOTAL_QUESTIONS && (
          < QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer} />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <Button variant="primary" className='next text-info' onClick={() => { nextQuestion(); getRandom() }}>Next Question</Button>
        ) : null}

      </ Wrapper>
    </>
  );
}

export default App;
