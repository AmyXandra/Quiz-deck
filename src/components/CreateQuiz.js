import React, { useState } from 'react';
import App from './layout/App';
import SideNav from './layout/SideNav';
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import MultipleQuestion from './includes/MultipleQuestion';
import TrueOrFalse from './includes/TrueOrFalse';
import QuizTitle from './includes/QuizTitle';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@progress/kendo-react-buttons";
import { RadioGroup } from "@progress/kendo-react-inputs";


export default function CreateQuiz() {

    const quiz_details = useSelector(state => state.quiz.new_deck);
    console.log("quiz_details", quiz_details)
    let deckId = quiz_details && quiz_details._id;


    const single_deck = useSelector(state => state.quiz.single_deck);
    

    const data = [
        {
            label: "Female",
            value: "female",
        },
        {
            label: "Male",
            value: "male",
        },
        {
            label: "Other",
            value: "other",
        },
    ];


    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <App className="main-content-padding">
            {quiz_details && !quiz_details.name &&
                <QuizTitle />
            }

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

                        <div style={{ background: "white", padding: '30px' }}>
                            
                            <div className="k-hbox k-justify-content-between mb-4">
                                <a href="/my-quizes">Back to My Quizes</a>
                                <Button icon="folder" primary={true}> Publish </Button>
                            </div>

                            <div className="quiz-preview-wrapper">
                                <div className="text-center mb-4">
                                    <h4>{quiz_details.name}</h4>
                                    <p>{quiz_details.description}</p>
                                </div>

                                {quiz_details && quiz_details.deckquestions.length > 0 ?
                                    <div>

                                        {single_deck && single_deck.length > 0 ?
                                            single_deck[0].deckquestions.map((question, index) => (
                                                <div className="single-quiz-block">
                                                    <h5>Question {index + 1}</h5>
                                                    <h4>{question.title}</h4>
                                                    <RadioGroup data={data} />
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
        </App>
    )
}