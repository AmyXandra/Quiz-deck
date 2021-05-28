import React, {useEffect} from 'react';
import App from './layout/App';
import Header from './layout/Header';
// import { Form, Field, FormElement } from "@progress/kendo-react-form";
// import { Error } from "@progress/kendo-react-labels";
// import { Input } from "@progress/kendo-react-inputs";
import MultipleQuestion from './includes/MultipleQuestion';
import TrueOrFalse from './includes/TrueOrFalse';
import QuizTitle from './includes/QuizTitle';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@progress/kendo-react-buttons";
import { RadioGroup } from "@progress/kendo-react-inputs";


export default function CreateQuiz() {

    const quiz_details = useSelector(state => state.quiz.new_deck);
    console.log("quiz_details", quiz_details)


    const single_deck = useSelector(state => state.quiz.single_deck);

    useEffect(() => {
        let dataToMap = single_deck[0] && single_deck[0].deckquestions 
        if (Array.isArray(dataToMap)) {
			let outputArray = [];
			dataToMap.map((option, i) => {
				let singleRowArray = {
					label: option.value,
					value: option.value,
				}
				outputArray.push(singleRowArray);
				return true;
			});
			return outputArray;
		}
    }, [single_deck]);
    
    function createTableData(dataToMap) {
		if (Array.isArray(dataToMap)) {
			let outputArray = [];
			dataToMap.map((option, i) => {
				let singleRowArray = {
					label: option.value,
					value: option.value,
				}
				outputArray.push(singleRowArray);
				return true;
			});
			return outputArray;
		}

	}
	

    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <App>
            {quiz_details && !quiz_details.name &&
                <QuizTitle />
            }
            <Header/>
            <div className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4 left-bar-wrapper">
                            <div className="left-app-bar">
                                <div className="create-quiz-menu">
                                    <h4>Question Types</h4>
                                    <ul style={{ display: "flex" }}>
                                        <li><MultipleQuestion /></li>
                                        <li><TrueOrFalse /></li>
                                    </ul>
                                </div>

                                <div className="create-quiz-menu">
                                    <h4>Settings</h4>
                                    <ul>
                                        <li>Private</li>
                                        <li>Make public(This will allow anybody to participate in your test)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-8 col-md-8">

                            <div className="quiz-previewer">
                                
                                <div className="k-hbox mb-4" style={{justifyContent: 'flex-end'}}>
                                    <a href="/my-quizes" className="k-button k-button-outline k-primary">Back to My Quizes</a>
                                    {/* <Button icon="folder" primary={true}> Publish </Button> */}
                                </div>

                                <div className="quiz-preview-wrapper">
                                    {quiz_details && 
                                    <div className="text-center quiz-title mb-4">
                                        <h4>{quiz_details.name}</h4>
                                        <p>{quiz_details.description}</p>
                                    </div>}

                                    {quiz_details && quiz_details.name ?
                                        <div>

                                            {single_deck && single_deck.length > 0 ?
                                                single_deck[0].deckquestions.map((question, index) => (
                                                    <div className="single-quiz-block">
                                                        <h5>Question {index + 1}</h5>
                                                        <h4>{question.title}</h4>
                                                        <RadioGroup data={createTableData(question.questionoptions)} checked={question.answer} />
                                                    </div>
                                                )) : ''
                                            }
                                        </div>
                                        :
                                        <div className="empty-state">
                                            <p>Select a quiz type from the left menu</p>
                                        </div>

                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}