import React, {Component} from "react";
import {Link} from "react-router-dom";
import bizzy from "./images/Bizzy.jpg";
import bizzyBee from "./images/bizzyBee.png";
import "./Landing.css";

class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container-fluid">
                <div className="row">
                    <div className="col s12 center-align logo">
                        <img id="logo" src={bizzy}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align bio">
                        <span className="biop">
                            <h5>Let's get BIZZY! <img data-aos="flip-up" id="bizzyBee" src={bizzyBee}></img></h5>
                            <p className="intro">Struggling to submit that assignment on time? Missing out on that concert you forgot to buy? Or the bills you paid late, AGAIN?</p>
                            <p className="intro">Well you might have a case of... PROCRASTINATION. Sounds awful, I know. But that is why BIZZY is here to help!</p>
                            <p className="intro">Researchers found that 1 in 5 people = 20% of us, are chronic procrastinators. Shocking! So let's take a look at why.</p>
                        </span>
                    </div>
                </div>
                <div className="row bio2">
                    <div className="col s12 center-align">
                        <span className="biop">
                            <h5 className="why" data-aos="zoom-out-right">WHY...</h5>
                            <h5 className="why" data-aos="zoom-out-left">Do We Procrastinate?</h5>
                            <br/>
                            <div className="whyBox">
                                <p className="intro">1. You seek the thrill of the last minute rush</p>
                                <p className="intro">2. You want to avoid the fear of failure or success </p>
                                <p className="intro">3. You are indecisional</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="row bio3">  
                    <div className="col s12 center-align">
                        <span className="biop"> 
                            <h5 data-aos="flip-up">We know how hard it is...so we made a solution for YOU!</h5>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align">
                        <h5 className="vidaloka">
                            Let's get started!
                        </h5>
                        
                        <br />
                        <Link
                            to="/register"
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                backgroundColor: "#FF7D5A"
                            }}
                            className="btn btn-large waves-effect waves-light hoverable roboto"
                        >
                        Register
                        </Link>
                        <Link
                            to="/login"
                            style={{
                                marginLeft: "2rem",
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}
                            className="btn btn-large waves-effect white hoverable black-text"
                        >
                        Log In
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
