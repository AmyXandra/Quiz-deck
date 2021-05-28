import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../redux/actions';
import App from "./layout/App";
import Header from "./layout/Header";


export default function TakeQuiz() {
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(quizActions.getDeckbyId(params.id));
	}, [dispatch]);

	const single_deck = useSelector(state => state.quiz.single_deck);
	console.log("single_deck", single_deck[0])


	function createTableData() {
		let dataToMap = single_deck[0] && single_deck[0].deckquestions;
		if (Array.isArray(dataToMap)) {
			let outputArray = [];
			dataToMap.map((ques, i) => {
				let singleRowArray = {
					index: i,
					title: ques.title,
					answer: ques.answer,
					options: ques.questionoptions,
				}
				outputArray.push(singleRowArray);
				return true;
			});
			return outputArray;
		}

	}
	const questions = createTableData()



	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (value, answer) => {
		console.log("value, answer", value, answer)
		if (value === answer) {
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
		<App>
			<Header />
			<div class="main-content-padding mt-4">
				{questions && 
				<div className="text-center quiz-title mb-4">
					<h4>{single_deck[0].name}</h4>
					<p>{single_deck[0].description}</p>
				</div>}
				<div className="quiz-wrapper">
				{showScore ? (
					<div className='score-section'>
						{questions && <h3>You scored {score} out of {questions.length}</h3>}
					</div>
				) : (
						<>

							{questions &&
								<>
									<div className='question-section'>
										<div className='question-count'>
											<span>Question {currentQuestion + 1}</span>/{questions.length}
										</div>
										<div className='question-text'>{questions[currentQuestion].title}</div>
									</div>
									<div className='answer-section'>
										{questions[currentQuestion].options.map((option) => (
											<button className="k-button k-button-outline k-primary" onClick={() => handleAnswerOptionClick(option.value, questions[currentQuestion].answer)}>{option.value}</button>
										))}
									</div>
								</>}
						</>
						
					)}
				</div>
			</div>
		</App>
	);
}
