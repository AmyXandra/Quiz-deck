import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import App from './layout/App';
import SideNav from './layout/SideNav';
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@progress/kendo-react-buttons";
import { RadioGroup } from "@progress/kendo-react-inputs";
import { quizActions } from '../redux/actions';


export default function ViewQuiz() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(quizActions.getDeckbyId(params.id));
    }, [dispatch]);

    let quiz_id = params.id

    const single_deck = useSelector(state => state.quiz.single_deck);
    console.log("single_deck", single_deck)

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


            <div className="container-fluid">
                <div className="row k-justify-content-center">


                    <div className="col-xs-12 col-sm-8 col-md-8">

                        <div style={{ background: "white", padding: '30px' }}>
                            <div className="k-hbox k-justify-content-between mb-4">
                                <a href="/my-quizes">Back to My Quizes</a>
                                <a href={`/test/${quiz_id}`}>Take Quiz</a>
                            </div>
                            <div className="quiz-preview-wrapper">
                            {single_deck && single_deck.length > 0 &&
                                <div className="text-center mb-4">
                                    <h4>{single_deck[0].name}</h4>
                                    <p>{single_deck[0].description}</p>
                                </div>
                            }


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

                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}