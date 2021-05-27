import React, { useState } from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Form, Field, FormElement, } from "@progress/kendo-react-form";
import { Input } from '@progress/kendo-react-inputs';
import { Button } from "@progress/kendo-react-buttons";
import { RadioButton } from "@progress/kendo-react-inputs";
import { useDispatch } from 'react-redux';
import { quizActions } from '../../redux/actions';
import { history } from '../../redux/helpers';


export default function QuizTitle() {

    const [visible, setVisible] = useState(true);

    const toggleDialog = () => {
        // setVisible(!visible);
        history('/my-quizes');
    };

    const dispatch = useDispatch();

    
    const handleSubmit = (dataItem) => {
        dispatch(quizActions.createQuizDeck(dataItem));
    }

    return <div>
        {/* <button className="k-button" onClick={toggleDialog}>True or False</button> */}
        {visible &&
            <Dialog title={"Fill in your quiz deck details"} onClose={toggleDialog}>
                
                
                <Form
                    onSubmit={handleSubmit}
                    render={(formRenderProps) => (
                        <FormElement style={{ width: 600 }}>
                            <fieldset className={"k-form-fieldset"}>

                                <Field name={"name"} className="mb-3" type={"text"} 
                                placeholder={"E.g: Physics past questions"} component={Input} label={"Deck name"} />
                                <Field name={"description"} className="mb-3" placeholder={"E.g: Questions for Jambites"} 
                                type={"text"} component={Input} label={"Edit question here"} />
                            </fieldset>

                            <DialogActionsBar>
                                <div className="k-form-buttons">
                                    <Button primary={true} type={"submit"} disabled={!formRenderProps.allowSubmit}>
                                        Create Quiz
                                    </Button>
                                    <Button onClick={toggleDialog}>Cancel</Button>
                                </div>
                            </DialogActionsBar>
                            
                        </FormElement>
                    )}
                />
                
            </Dialog>}
    </div>;
};

