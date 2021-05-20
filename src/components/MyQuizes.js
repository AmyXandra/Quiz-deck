import React from 'react';
import App from './layout/App';
import SideNav from './layout/SideNav';
import QuizCard from './includes/QuizCard';


export default function MyQuizes() {
    return(
        <App>
            <SideNav>
                <div>
                    <QuizCard/>
                </div>
            </SideNav>
        </App>
    )
}