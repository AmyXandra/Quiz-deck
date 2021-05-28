import React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import {AuthImage} from '../images/Images';
import {userActions} from '../../redux/actions';
import { useDispatch } from 'react-redux'; 


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

    const dispatch = useDispatch();
    const handleSubmit = (dataItem) => {
        dispatch(userActions.register(dataItem));
        console.log("dataItem",dataItem)
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
                                                                        
                                    <h4>Get started with Quizdeck</h4>
                                    <p className="mb-3">Already have an account? <a href="/login">Login</a></p>
                                    
                                    <div className="mb-3">
                                        <Field
                                            name={"username"}
                                            component={Input}
                                            type={"text"}
                                            label={"Username"}
                                        />
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