import React from 'react';
// import * as ReactDOM from 'react-dom';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';

export default function Register() {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/);
    const emailValidator = (value) => (emailRegex.test(value) ? "" : "Please enter a valid email.");
    const EmailInput = (fieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div>
                <Input {...others} />
                {
                    visited && validationMessage &&
                    (<Error>{validationMessage}</Error>)
                }
            </div>
        );
    };
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <div className="auth-wrapper">
            <div className="wrap-login100">
                <div className="login100-form">
                    <Form
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <FormElement style={{ maxWidth: 650 }}>
                                <fieldset className={"k-form-fieldset"}>
                                    {/* <legend className={"k-form-legend"}>
                                        Please fill in the fields:
                                    </legend> */}
                                    <h3>Get started with Quizdeck</h3>
                                    <p className="mb-3">Already have an account? Login</p>

                                    <div className="mb-3">
                                        <Field
                                            name={"firstName"}
                                            component={Input}
                                            label={"First name"}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <Field name={"lastName"} component={Input} label={"Last name"} />
                                    </div>

                                    <div className="mb-3">
                                        <Field
                                            name={"email"}
                                            type={"email"}
                                            component={EmailInput}
                                            label={"Email"}
                                            validator={emailValidator}
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
                </div>
                <div className="login100-more">
                    <div>
                        <h3>Engage your friends</h3>
                        <p>Make study time with friends feel connected even when you’re far away</p>
                    </div>
                </div>
            </div>
        </div>
    );
}