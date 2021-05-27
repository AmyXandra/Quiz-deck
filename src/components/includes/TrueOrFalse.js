import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { TrueFalse } from '../images/Images';

export default function TrueOrFalse() {
    const [visible, setVisible] = React.useState(false);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return <div>
        <button className="k-button" disabled onClick={toggleDialog}>
            <div>
                <img src={TrueFalse} alt="multiple-option" />
                True or False
            </div>
        </button>
        {visible && <Dialog title={"Please confirm"} onClose={toggleDialog}>
            <p style={{
                margin: "25px",
                textAlign: "center"
            }}>Are you sure you want to continue?</p>
            <DialogActionsBar>
                <button className="k-button" onClick={toggleDialog}>No</button>
                <button className="k-button" onClick={toggleDialog}>Yes</button>
            </DialogActionsBar>
        </Dialog>}
    </div>;
};

