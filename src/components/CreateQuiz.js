import React, { useState } from 'react';
import App from './layout/App';
import SideNav from './layout/SideNav';
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import MultipleQuestion from './includes/MultipleQuestion';
import TrueFalse from './includes/TrueFalse';
import QuizTitle from './includes/QuizTitle';
import { Button } from "@progress/kendo-react-buttons";
import { RadioGroup } from "@progress/kendo-react-inputs";


export default function CreateQuiz() {
    const [input, setInput] = useState({
        quizTitle: ''
    });
    const { quizTitle } = input;


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
            <a href="/my-quizes">Back to My Quizes</a>
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4">
                    <div>
                        <div className="create-quiz-menu">
                            <h4>Question Types</h4>
                            <ul>
                                <li><MultipleQuestion /></li>
                                <li><TrueFalse /></li>
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

                    <Button icon="folder" primary={true}> Save as Draft </Button>
                    <Button icon="folder" primary={true}> Publish </Button>
                    <div style={{ background: "white",   padding: '30px'}}>
                        <p>Select a question type from the left</p>
                        <div className="text-center mb-4">
                            <h4>Quiz Title</h4>
                            <p>Quiz Description</p>
                        </div>

                        <div className="single-quiz-block">
                            <h5>Question 1</h5>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at porttitor odio. Morbi laoreet, odio in laoreet aliquet?</h4>
                            <RadioGroup data={data} />
                        </div>
                        <div className="single-quiz-block">
                            <h5>Question 2</h5>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at porttitor odio. Morbi laoreet, odio in laoreet aliquet?</h4>
                            <RadioGroup data={data} />
                        </div>
                        <div className="single-quiz-block">
                            <h5>Question 3</h5>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at porttitor odio. Morbi laoreet, odio in laoreet aliquet?</h4>
                            <RadioGroup data={data} />
                        </div>
                    </div>
                </div>
            </div>

        </App>
    )
}