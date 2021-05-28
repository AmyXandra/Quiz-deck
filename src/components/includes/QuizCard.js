import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle, Avatar } from '@progress/kendo-react-layout';
import { useDispatch, useSelector } from 'react-redux';
import { quizActions } from '../../redux/actions';
import { Default } from '../images/Images';



export default function QuizCard() {
    const history = useHistory();
    // const [cards, setCards] = useState(cardsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(quizActions.getUserDeck());
    }, [dispatch]);

    const cards = useSelector(state => state.quiz.user_decks);
    console.log("ALL DECKS", cards)




    // const postLikesCount = card => {
    //     let index = cards.findIndex(item => item.thumbnailSrc === card.thumbnailSrc);
    //     let newCards = [...cards];
    //     newCards[index].postLiked = !newCards[index].postLiked;
    //     setCards(newCards);
    // };

    // const commentClick = card => {
    //     let index = cards.findIndex(item => item.thumbnailSrc === card.thumbnailSrc);
    //     let newCards = [...cards];
    //     newCards[index].commentsExpanded = !newCards[index].commentsExpanded;
    //     setCards(newCards);
    // };

    // const postComment = card => {
    //     let index = cards.findIndex(item => item.thumbnailSrc === card.thumbnailSrc);
    //     let newCards = [...cards];
    //     let textArea = document.querySelector('.k-textarea');
    //     newCards[index].comments.push({
    //         likes: 0,
    //         text: textArea.value
    //     });
    //     textArea.value = '';
    //     setCards(newCards);
    // };

    return <div className="row">

        {cards && cards.map((card, index) => {
            return<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index} onClick={() => history.push(`/preview/${card._id}`)}>
                <Card style={{
                    // width: 260,
                    boxShadow: '0 0 4px 0 rgba(0, 0, 0, .1)',
                    marginTop: '15px',
                    borderRadius: '15px'
                }}>
                    <CardImage src={Default} style={{height: '220px', maxWidth: '100%'}} />
                    <CardHeader className="k-hbox" style={{ background: 'transparent' }}>
                        
                        <div style={{ width: '100%' }}>
                            <CardTitle style={{
                                marginBottom: '4px'
                            }}>{card.name}</CardTitle>
                            <CardSubtitle style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p>{card.description}</p>

                                <p>10 min</p>

                            </CardSubtitle>
                        </div>

                    </CardHeader>

                    {/* <CardActions className="card-actions" style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                        }}>
                        <div>
                            <button className="k-button k-flat" onClick={() => postLikesCount(card)}>
                                <span className={card.postLiked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline'} />
                            </button>
                            <button className="k-button k-flat" onClick={() => commentClick(card)}>
                                <span className="k-icon k-i-comment" />
                            </button>
                            <button className="k-button k-flat"><span className="k-icon k-i-share" /></button>
                        </div>
                        <span style={{
                            fontSize: '13px',
                            alignSelf: 'center',
                            color: '#656565'
                        }}>{card.postLikes} likes</span>
                    </CardActions>
                    {card.commentsExpanded && <CardBody>
                        <div>
                            <div style={{
                                marginBottom: '8px',
                                padding: '0 16px'
                            }}>
                                {card.comments.map((comment, index) => {
                                    return <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }} key={index}>
                                        <div style={{
                                            padding: '4px 0',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>
                                            <Avatar type='initials' shape='circle' style={{
                                                color: 'white'
                                            }} size='small'>
                                                <span>SS</span>
                                            </Avatar>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}>
                                                <span style={{
                                                    fontSize: '13px',
                                                    fontWeight: 'bold',
                                                    maxWidth: '100px',
                                                    wordBreak: 'break-all'
                                                }}>{comment.text}</span>
                                                <span className="time">1s ago<span style={{
                                                    marginLeft: '8px'
                                                }}>{comment.likes} like</span></span>
                                            </div>
                                        </div>
                                        <button className="k-button k-flat">
                                            <span className={comment && comment.likes > 0 ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline'} />
                                        </button>
                                    </div>;
                                })}
                            </div>
                        </div>
                        <div className="k-hbox" style={{
                            padding: '16px 16px 0'
                        }}>
                            <textarea className="k-textarea" placeholder="Comment..." style={{
                                resize: 'none',
                                borderRadius: 10,
                                padding: 5,
                                fontSize: 10
                            }} />
                            <button className="k-button k-primary k-flat" style={{
                                marginLeft: 10,
                                borderRadius: 10
                            }} onClick={() => postComment(card)}>Post</button>
                        </div>
                    </CardBody>} */}
                </Card>
            </div>;
        })}
    </div>;
};

