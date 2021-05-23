import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

export default function TrueFalse() {
    const [visible, setVisible] = React.useState(false);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return <div>
        <button className="k-button" onClick={toggleDialog}>True or False</button>
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

