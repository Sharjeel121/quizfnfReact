import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from '@mui/material';

function App() {
  const questions = [
		{
			questionText: 'What is the capital of Pakistan?',
			answerOptions: [
				{ answerText: 'Peshawar', isCorrect: false },
				{ answerText: 'Lahore', isCorrect: false },
				{ answerText: 'Islamabad', isCorrect: true },
				{ answerText: 'Karachi', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
    // <div onClick={()=>setstate(!state)}>
    //   {state?<img src={on}></img>:<img src={off}></img>}
    //   <Button variant="contained" onClick={()=>setstate(!state)} >click</Button>
    // </div>
    <div className="App container">
      	{showScore ? (
				<div className='score-section'>
				<h1>
          	You scored {score} out of {questions.length}
        </h1>
				</div>
			) : (
				<>
      <div className="p-2 head  " >
        <h2 >Quiz App</h2>
      </div>
      <div className="p-5 questionCard " >
        <h3 className="ps-5 col-6 "><span>Question {currentQuestion + 1}</span>/{questions.length}</h3>
        <h4 className="p-4">{questions[currentQuestion].questionText}</h4>
        <div className="container ">
         
          	{questions[currentQuestion].answerOptions.map((answerOption) => (
							 <div className=" col-lg-6 button p-2">
                 <button className="btn btn-primary  pb-3 " onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          </div>
						))}
        </div>
      </div>
            </>
      )}
    </div>

  );
}

export default App;
