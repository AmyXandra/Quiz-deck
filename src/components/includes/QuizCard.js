import React, {useState} from 'react';
// import * as ReactDOM from 'react-dom';
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle, Avatar } from '@progress/kendo-react-layout';
const cardsData = [
    {
        thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg',
        headerTitle: 'Mastering English',
        headerSubtitle: 'Bulgaria, Europe',
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: '',
        postLikes: 174,
        scrollViewItems: {
            url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg'
        }
    },
    {
        thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg',
        headerTitle: 'bg_traditions',
        headerSubtitle: 'Bulgaria, Europe',
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: '',
        postLikes: 174,
        scrollViewItems: {
            url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg'
        }
    },
    {
        thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg',
        headerTitle: 'bg_traditions',
        headerSubtitle: 'Bulgaria, Europe',
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: '',
        postLikes: 174,
        scrollViewItems: {
            url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg'
        }
    },
    {
        thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg',
        headerTitle: 'bg_traditions',
        headerSubtitle: 'Bulgaria, Europe',
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: '',
        postLikes: 174,
        scrollViewItems: {
            url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg'
        }
    },
    {
        thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg',
        headerTitle: 'bg_traditions',
        headerSubtitle: 'Bulgaria, Europe',
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: '',
        postLikes: 174,
        scrollViewItems: {
            url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg'
        }
    },
    {
        thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg',
        headerTitle: 'bg_traditions',
        headerSubtitle: 'Bulgaria, Europe',
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: '',
        postLikes: 174,
        scrollViewItems: {
            url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg'
        }
    },
];

export default function QuizCard() {
    const [cards, setCards] = useState(cardsData);

    const postLikesCount = card => {
        let index = cards.findIndex(item => item.thumbnailSrc === card.thumbnailSrc);
        let newCards = [...cards];
        newCards[index].postLiked = !newCards[index].postLiked;
        setCards(newCards);
    };

    const commentClick = card => {
        let index = cards.findIndex(item => item.thumbnailSrc === card.thumbnailSrc);
        let newCards = [...cards];
        newCards[index].commentsExpanded = !newCards[index].commentsExpanded;
        setCards(newCards);
    };

    const postComment = card => {
        let index = cards.findIndex(item => item.thumbnailSrc === card.thumbnailSrc);
        let newCards = [...cards];
        let textArea = document.querySelector('.k-textarea');
        newCards[index].comments.push({
            likes: 0,
            text: textArea.value
        });
        textArea.value = '';
        setCards(newCards);
    };

    return <div className="row">
    {/* <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    }}> */}
        {cards.map((card, index) => {
            return <div className="col-md-4" key={index}>
                <Card style={{
                    // width: 260,
                    boxShadow: '0 0 4px 0 rgba(0, 0, 0, .1)',
                    marginTop: '15px',
                    borderRadius: '15px'
                    }}>
                    <CardImage src={card.scrollViewItems.url} style={{height: '220px', maxWidth: '100%'}} />
                    <CardHeader className="k-hbox" style={{background: 'transparent'}}>
                        <Avatar type='image' size='medium' shape='circle'><img style={{
                            width: 32,
                            height: 32
                        }} src={card.thumbnailSrc} alt=""/></Avatar>
                        <div style={{width: '100%'}}>
                            <CardTitle style={{
                                marginBottom: '4px'
                            }}>{card.headerTitle}</CardTitle>
                            <CardSubtitle style={{display: 'flex',justifyContent: 'space-between'}}>
                                <p>{card.headerSubtitle}</p>
                                
                                <p>10 min</p>
                                
                            </CardSubtitle>
                        </div>
                        
                    </CardHeader>
                    
                    <CardActions className="card-actions" style={{
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
                    </CardBody>}
                </Card>
            </div>;
        })}
    </div>;
};

