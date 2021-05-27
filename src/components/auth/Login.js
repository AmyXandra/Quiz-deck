import React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import {AuthImage} from '../images/Images';
import {userActions} from '../../redux/actions';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 


export default function Login() {
    const location = useLocation();
    const dispatch = useDispatch();

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
    
    const handleSubmit = (dataItem) => {
        const { from } = location.state || { from: { pathname: "/" } };
        dispatch(userActions.login(dataItem, from));
    }

    return (
        <div className="auth-wrapper">
            <div className="wrap-login100">
                <div className="login100-form">
                    <Form
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <FormElement style={{ maxWidth: 650 }}>
                                <fieldset className={"k-form-fieldset"}>
                                    
                                    <h3>Log in</h3>
                                    <p className="mb-3">Don't have a QuizDeck account yet? <a href="/register">Create an account</a></p>

                                    <div className="mb-3">
                                        <Field
                                            name={"email"}
                                            type={"email"}
                                            component={EmailInput}
                                            label={"Email"}
                                            validator={emailValidator}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <Field
                                            name={"password"}
                                            component={Input}
                                            type={"password"}
                                            label={"Password"}
                                        />
                                    </div>
                                    
                                </fieldset>
                                <div className="k-form-buttons">
                                    <button
                                        type={"submit"}
                                        className="k-button k-button-primary"
                                        disabled={!formRenderProps.allowSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </FormElement>
                        )}
                    />
                </div>
                <div className="login100-more" style={{backgroundImage: `url(${AuthImage})`}}>
                    <div className="auth-desc">
                        <h3>Engage your friends</h3>
                        <p>Make study time with friends feel connected even when you’re far away</p>
                    </div>
                </div>
            </div>
        </div>
    );
}