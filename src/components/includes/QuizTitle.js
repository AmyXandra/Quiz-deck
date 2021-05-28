import React, { useState } from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Form, Field, FormElement, } from "@progress/kendo-react-form";
import { Input } from '@progress/kendo-react-inputs';
import { Button } from "@progress/kendo-react-buttons";
import { quizActions } from '../../redux/actions';
import { history } from '../../redux/helpers';
import {useDispatch} from 'react-redux';


export default function QuizTitle() {

    const [visible] = useState(true);

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
                        <FormElement style={{ maxWidth: 500, width: '350px' }}>
                            <fieldset className={"k-form-fieldset"}>

                                <Field name={"name"} className="mb-3" type={"text"} 
                                placeholder={"E.g: Physics past questions"} component={Input} label={"Deck name"} />
                                <Field name={"description"} className="mb-3" placeholder={"E.g: Questions for Jambites"} 
                                type={"text"} component={Input} label={"Enter deck description"} />
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

