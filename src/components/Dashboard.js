import React from 'react';
import App from './layout/App';
import SideNav from './layout/SideNav';
import QuizCard from './includes/QuizCard';


export default function Dashboard() {
    return(
        <App>
            <SideNav>
                <div>
                    <div>
                        <h1>My Quizes</h1>
                        <div>Create Quiz</div>
                    </div>
                    <QuizCard/>
                </div>
            </SideNav>
        </App>
    )
}