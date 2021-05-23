import React from 'react';
// import { TileLayout } from "@progress/kendo-react-layout";
// import Header from './layout/Header';
import { Hero, Publish } from './images/Images';
import YoutubeEmbed from "./includes/YoutubeEmbed";
import QuizCard from './includes/QuizCard';


export default function Landing() {

    return (
        <div>
            <section className="hero">
                {/* <Header /> */}
                <div className="container">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">QuizDeck</a>
                            </div>
                            {/* <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Page 2</a></li>
                            </ul> */}
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-5">
                            <div className="hero-text">
                                <h1 className="mb-4">The best place to create an Online Quiz That’s Fun To Use</h1>
                                <p>CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
                                <a className="k-button mb-4" href="/register">Get Started</a>
                                <p className="mb-4">Already a member? <a href="/login">Login</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 offset-lg-1">
                            <div>
                                <img src={Hero} className="img-responsive w-100" alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="new-section how-it-works">
                <div className="container">
                    <div className="text-center heading">
                        <h3 className="">Features Of Quiz Marker</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas facilisis cursus semper quis mattis. </p>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-4">
                            <div className="step">
                                <div className="icon">
                                    <img src={Publish} alt="" />
                                </div>
                                <h4>1. Create Quiz</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ornare at velit sodales. Cras donec tortor varius ipsum nibh sed.</p>
                                <div className="line">
                                    <svg width="121px" height="59px" viewBox="0 0 121 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-dasharray="3">
                                            <g id="Group" transform="translate(1.000000, 0.000000)" stroke="#979797" stroke-width="2">
                                                <path d="M0.2109375,12.8632812 C20.0091146,26.8632812 39.8072917,33.8632812 59.6054687,33.8632812 C79.4036458,33.8632812 99.2018229,26.8632812 119,12.8632812" id="Path-2"></path>
                                                <polyline id="Path-3" points="75.1103516 0.977539062 119.116211 13.3417969 105.357422 60.8583984"></polyline>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="step">
                                <div className="icon">
                                    <img src={Publish} alt="" />
                                </div>
                                <h4>2. Share Questions with Friends</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ornare at velit sodales. Cras donec tortor varius ipsum nibh sed.</p>
                                <div className="line">
                                    <svg width="121px" height="64px" viewBox="0 0 121 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-dasharray="3">
                                            <g id="Group-2" transform="translate(1.000000, 0.000000)" stroke="#979797" stroke-width="2">
                                                <path d="M0.2109375,21.8632812 C20.0091146,35.8632812 39.8072917,42.8632812 59.6054687,42.8632812 C79.4036458,42.8632812 99.2018229,35.8632812 119,21.8632812" id="Path-2-Copy" transform="translate(59.605469, 32.363281) rotate(-180.000000) translate(-59.605469, -32.363281) "></path>
                                                <polyline id="Path-3" transform="translate(91.581055, 37.226562) rotate(48.000000) translate(-91.581055, -37.226562) " points="69.578125 7.28613281 113.583984 19.6503906 99.8251953 67.1669922"></polyline>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="step">
                                <div className="icon">
                                    <img src={Publish} alt="" />
                                </div>
                                <h4>3. Publish</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ornare at velit sodales. Cras donec tortor varius ipsum nibh sed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="new-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <div>
                                <h3 className=" heading">Why Would You Make  A Quiz?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At massa fringilla tellus nec. Ut mollis curabitur egestas diam scelerisque quis. Et sed sed vel ut sagittis cursus felis quis. Convallis est volutpat non sed vitae est mauris eget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="new-section">
                <div className="container">
                    <div className="text-center heading">
                        <h3>Published Quiz</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas facilisis cursus semper quis mattis. </p>
                    </div>
                    <QuizCard/>
                    {/* <div className="row">

                    </div> */}
                </div>
            </section>
        </div >
    )
}