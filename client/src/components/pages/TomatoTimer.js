import React, {Component} from "react";
import UserNavBar from "../dashboard/UserNavBar";
import Timer from "../dashboard/Timer";
import "./style.css";

class TomatoTimer extends Component {
    render() {
        return (
            <div className="row">
                <div className="row">
                    <UserNavBar/>
                </div>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4 className="vidaloka">TRY THIS TOMATO TIMER!</h4> 
                        <p className="roboto">Instead of trying to cram your work in the time you have, try breaking it down into work and play modes to acheive efficient studying</p>
                    </div>
                </div>
                <div className="row">
                    <Timer/>
                </div>
            </div>
        )
    }
};

export default TomatoTimer;