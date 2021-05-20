import React, { useState, Fragment, useCallback } from 'react';
// import * as ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
// import { FormCheckbox, FormRadioGroup } from "./form-components";
import { Form, Field, FormElement, } from "@progress/kendo-react-form";
import { Input } from '@progress/kendo-react-inputs';
import { Button } from "@progress/kendo-react-buttons";
import { RadioButton } from "@progress/kendo-react-inputs";


// const confirmationData = [
//     { label: "Phone Call", value: "phone" },
//     { label: "Via Email", value: "email" },
// ];

export default function MultipleQuestion() {
    const [visible, setVisible] = useState(false);
    const toggleDialog = () => {
        setVisible(!visible);
    };

    const [selectedValue, setSelectedValue] = useState("first");
    const handleChange = useCallback(
        (e) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );


    const [input, setInput] = useState({
        questionText: '', answerOptions: []
    });
    const { questionText } = input;

    // Handles question text name
    const handleInputName = (event) => {
        const { name, value } = event.target;
        setInput(input => ({ ...input, [name]: value }));
    }
    console.log("input", input)

    // Handles question answer options
    const [inputList, setInputList] = useState([{ answeText: "", isCorrect: false }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
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
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    //   const handleAddFields = () => {
    //     const values = [...inputArray];
    //     values.push({ name: '', quantity: '0', price: '0' });
    //     setInputArray(values);
    // };


    // const handleRemoveFields = index => {
    //     const values = [...inputArray];
    //     values.splice(index, 1);
    //     setInputArray(values);
    // };



    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <div>
            <button className="k-button" onClick={toggleDialog}>Multiple Choice</button>
            {visible &&
                <Dialog title={"Edit Multi choice quiz question"} onClose={toggleDialog} >
                    <Form
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <FormElement style={{ width: 800 }}>
                                {/* <Field
                                id={"confirmationType"}
                                name={"confirmationType"}
                                label={"Type of Confirmation"}
                                hint={"Hint: Choose a way to receive a confirmation"}
                                component={FormRadioGroup}
                                data={confirmationData}
                            /> */}
                                <Field name={questionText} className="mb-4" component={Input} label={"Edit question here"} onChange={handleInputName} />


                                {
                                    inputList.map((x, index) => (
                                        <Fragment key={`${x}~${index}`}>

                                            {/* <button
                                                className="btn btn-link"
                                                type="button"
                                                onClick={() => handleRemoveFields(index)}
                                            >
                                                -
                                            </button>
                                            <button
                                                className="btn btn-link"
                                                type="button"
                                                onClick={() => handleAddFields()}
                                            >
                                                +
                                            </button> */}
                                            <div className="box">
                                                <input
                                                    name="firstName"
                                                    value={x.firstName}
                                                    onChange={e => handleInputChange(e, index)}
                                                />
                                                <input
                                                    className="ml10"
                                                    name="lastName"
                                                    value={x.lastName}
                                                    onChange={e => handleInputChange(e, index)}
                                                />
                                                <div className="btn-box">
                                                    {inputList.length !== 1 && <button
                                                        className="mr10"
                                                        onClick={() => handleRemoveClick(index)}>Remove</button>}
                                                    {inputList.length - 1 === index && <button onClick={handleAddClick}>Add</button>}
                                                </div>
                                            </div>
                                        </Fragment>
                                    ))
                                }
                                <div>
                                    <RadioButton
                                        name="group1"
                                        value="first"
                                        checked={selectedValue === "first"}
                                        label="Edit option"
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <RadioButton
                                        name="group1"
                                        value="second"
                                        checked={selectedValue === "second"}
                                        label="Edit option"
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="k-form-buttons">
                                    <Button primary={true} type={"submit"} disabled={!formRenderProps.allowSubmit}>
                                        Submit
                                    </Button>
                                    <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                                </div>
                            </FormElement>
                        )}
                    />
                    <DialogActionsBar>
                        <button className="k-button" onClick={toggleDialog}>No</button>
                        <button className="k-button" onClick={toggleDialog}>Yes</button>
                    </DialogActionsBar>
                </Dialog>
            }
        </div>
    )
};

