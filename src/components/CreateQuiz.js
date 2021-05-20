import React from 'react';
import App from './layout/App';
import SideNav from './layout/SideNav';
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import MultipleQuestion from './includes/MultipleQuestion';
import TrueFalse from './includes/TrueFalse';


export default function CreateQuiz() {
    return (
        <App>
            <SideNav>
                <div>
                    <div>
                        <h1>Quiz menu</h1>
                        <li><MultipleQuestion/></li>
                        <li><TrueFalse/></li>

                        <h1>Settings</h1>
                        <li>Private</li>
                        <li>Make public(This will allow anybody to participate in your test)</li>
                    </div>
                    <div>View QUiz
                    <Form
                            render={(formRenderProps) => (
                                <FormElement style={{ maxWidth: 650 }}>
                                    <fieldset className={"k-form-fieldset"}>

                                        <div className="mb-3">
                                            <Field
                                                name={"firstName"}
                                                component={Input}
                                                label={"First name"}
                                            />
                                        </div>

                                    </fieldset>
                                    <div className="k-form-buttons">
                                        <button
                                            type={"submit"}
                                            className="k-button"
                                            disabled={!formRenderProps.allowSubmit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </FormElement>
                            )}
                        />
                        <p>Select a question type from the left</p>
                    </div>
                </div>
            </SideNav>
        </App>
    )
}