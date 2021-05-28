import React, { useState, Fragment, useCallback } from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Form, Field, FormElement, } from "@progress/kendo-react-form";
import { Input } from '@progress/kendo-react-inputs';
import { Button } from "@progress/kendo-react-buttons";
import { RadioButton } from "@progress/kendo-react-inputs";
import { quizActions } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { MultipleOption } from '../images/Images';


export default function MultipleQuestion() {
    const [visible, setVisible] = useState(false);
    const toggleDialog = () => {
        setVisible(!visible);
    };

    const dispatch = useDispatch();

    const quiz_details = useSelector(state => state.quiz.new_deck);
    // console.log("quiz_details", quiz_details)
    let deckId = quiz_details && quiz_details._id
    
    // Handles question answer options
    const [inputList, setInputList] = useState([{ id: "", value: "" }]);
    const { id, value } = inputList;

    // handle radio inpt label change
    const handleInputChange = (event, index) => {
        const list = [...inputList];

        list[index].value = event.target.value;
        list[index].id = index;

        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { id: "", value: "" }]);
    };

    // handle click event of the radio button
    const [selectedOption, setSelectedOption] = useState('');
    const onValueChange = (event) => {
        setSelectedOption(event.target.value)
    }
    
        

    const handleSubmit = (dataItem) => {
        // console.log("dataitem",{ ...dataItem, questionoptions: inputList, "answer": selectedOption, "type": 1 })
        let data_stuffs = { ...dataItem, questionoptions: inputList, "answer": selectedOption, "type": 1 }
        dispatch(quizActions.createQuizQuestion(data_stuffs, deckId, setVisible))
    };

    return (
        <div>
            <button className="k-button" onClick={toggleDialog}>
            <div className="option-img">
                <img src={MultipleOption} alt="multiple-option" />
                Multiple Choice
            </div>
            </button>
            {visible &&
                <Dialog title={"Edit Multi choice quiz question"} onClose={toggleDialog} >
                    <Form
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <FormElement style={{ maxWidth: 600,  }}>

                                <Field
                                    name={"title"}
                                    component={Input}
                                    type={"text"}
                                    label={"Question"}
                                    placeholder={"E.g: Is Pawpaw a fruit?"}
                                />

                                <h6 className="mt-4 mb-1">Options</h6>
                                <div className="p-2">
                                    {
                                        inputList.map((input, index) => (
                                            <Fragment key={`${input}~${index}`}>

                                                <div className="radio-input-box mb-3">
                                                    <div>
                                                        <input type="radio" className="k-radio" name="quiz" value={input.value} id={index} 
                                                        checked={selectedOption === input.value} onChange={event => onValueChange(event, index)} />
                                                        <label for={index}>
                                                            <input type="text" name="value" className="k-textbox ml-1" placeholder="Enter option" 
                                                            onChange={event => handleInputChange(event, index)} />
                                                        </label>
                                                    </div>
                                                    
                                                        {inputList.length !== 1 && <button
                                                            className="mr10"
                                                            onClick={() => handleRemoveClick(index)}>x</button>}

                                                    
                                                </div>

                                            </Fragment>

                                        ))

                                    }
                                </div>

                                
                                <button className="k-button k-button-outline k-primary mt-3 mb-4" onClick={handleAddClick}>Add Option</button>
                                


                                <DialogActionsBar>
                                    <div className="k-form-buttons">
                                        <Button primary={true} type={"submit"} disabled={!formRenderProps.allowSubmit}>
                                            Submit
                                        </Button>
                                        <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                                    </div>
                                </DialogActionsBar>
                            </FormElement>
                        )}
                    />

                </Dialog>
            }
        </div>
    )
};

