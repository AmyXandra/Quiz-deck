import React, { useState } from 'react';
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

    const [selectedValue, setSelectedValue] = useState("first");
    const handleChange = React.useCallback(
        (e) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );

    const [input, setInput] = useState({
        company_id: '', customer_name: '', customer_phone: '', customer_email: '', 
    });

    const { customer_name, customer_phone, customer_email, customer_gender} = input;


    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setInput(input => ({ ...input, [name]: value }));

    //     if (event.target.name === 'customer_country') {
    //         getCountryStates(document.getElementById('io-' + event.target.value).getAttribute('io'));
    //     }

    // }

    const toggleDialog = () => {
        setVisible(!visible);
    };
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
                                <Field name={"firstName"} className="mb-4" component={Input} label={"First name"} />
                                <input type="radio" name="site_name"
                                    value=""
                                    // checked={this.state.site === result.SITE_NAME}
                                    defaultValue="option2"
                                    onChange={handleChange} />
                                <div>
                                    <RadioButton
                                        name="group1"
                                        value="first"
                                        checked={selectedValue === "first"}
                                        label="Edit option 1"
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <RadioButton
                                        name="group1"
                                        value="second"
                                        checked={selectedValue === "second"}
                                        label="Edit option 2"
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

