import React from 'react';
import App from './layout/App';
import SideNav from './layout/SideNav';
import QuizCard from './includes/QuizCard';
import { Button } from "@progress/kendo-react-buttons";


export default function Dashboard() {
    return(
        <App>
            <SideNav>
                <div className="main-content-padding">
                    <div style={{display: 'flex',justifyContent: 'space-between'}}>
                        <h1>My Quizes</h1>
                        <a href="/create">
                        <Button icon="folder" primary={true}>                        
                        </Button>
                        Create Quiz
                        </a>
                    </div>
                    <QuizCard/>
                </div>
            </SideNav>
        </App>
    )
}