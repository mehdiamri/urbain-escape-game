import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";
// Components
import QuestionCard from "./QuestionCard";
// Styles
import { GlobalStyle, Wrapper } from "./AppStyles";
import { EmptyDiv } from './QuestionCardStyles';
import { BatimentIntelligentH1 } from './QuestionCardStyles'
import { Button } from '../../ButtonElements';
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Compare with correct answer from API
      const correct = questions[number].correct_answer === answer;
      // Increment score if answer is correct 
      if (correct) {
        setScore(prev => prev + 1);
      }
      // Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    // Move on to next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    
      <GlobalStyle />
      <Wrapper>
      
      <h1>Apprendre sur l'énergie du bâtiment. Cliquer sur commencer</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          (
            <>
           
            <Button onClick={startTrivia}>
              Commencer
            </Button>
            </>
          )
          :
          null
        }
        {
          !gameOver ?
            <p className="score">Score:{score}</p>
            :
            null
        }
        {
          loading ?
          <>
         
            <p>Loading Questions ...</p>
            </>
            :
            null
        }
        {
          !loading && !gameOver && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )
        }
        {
          !gameOver && !loading && userAnswers.length === number + 1 && number !== (TOTAL_QUESTIONS - 1) ?
            (
              <Button  onClick={nextQuestion}>
                Next Question
              </Button>
            )
            :
            null
        }
     
      </Wrapper>

    </>
  );
}

export default App;