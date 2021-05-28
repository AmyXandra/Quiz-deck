import React, {useEffect} from 'react';
import App from './layout/App';
import SideNav from './layout/SideNav';
import QuizCard from './includes/QuizCard';
import { Button } from "@progress/kendo-react-buttons";
import {useDispatch, useSelector} from 'react-redux';
import {quizActions} from '../redux/actions'


export default function MyQuizes() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(quizActions.getUserDeck());
    }, [dispatch]);

    const myquizes = useSelector(state => state.quiz.user_decks);
    console.log("ALL DECKS", myquizes)
    return(
        <App>
            <SideNav>
                <div className="main-content-padding mt-4">
                    <div style={{display: 'flex',justifyContent: 'space-between', paddingBottom:'30px'}}>
                        <h3>My Quizes</h3>
                        <a href="/create">
                        <Button icon="plus" primary={true} className="btn-rounded-sm"> </Button> New quiz
                        </a>
                    </div>
                    {myquizes && myquizes.length > 0 ? 
                        <QuizCard/>
                        : 
                        <div className="empty-state">
                            <p>You have not created any quizes yet</p>
                            <a href="/create" className="k-button k-button-primary">Create Quiz</a>
                        </div>
                    }
                </div>
            </SideNav>
        </App>
    )
}