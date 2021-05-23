import React from 'react';
import App from './layout/App';
import SideNav from './layout/SideNav';
import QuizCard from './includes/QuizCard';


export default function MyQuizes() {
    return(
        <App>
            <SideNav>
                <div className="main-content-padding">
                    <div style={{display: 'flex',justifyContent: 'space-between'}}>
                        <h1>My Quizes</h1>
                        <div>Create Quiz</div>
                    </div>
                    <QuizCard/>
                </div>
            </SideNav>
        </App>
    )
}