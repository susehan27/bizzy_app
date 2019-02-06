import React, { Component } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import bizzyB from "./images/bizzyB.png";
import UserNavBar from "./UserNavBar.js";
import "./style.css";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <div className="row">
                <UserNavBar/>

                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                        <b className="vidaloka">Hey there,</b> {user.name.split(" ")[0]}
                        <p className="flow-text grey-text text-darken-1 roboto">
                            what do you need to get done?
                        </p>
                       </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align">
                        <div className="row">
                            <div className="col s4">
                                <div className="card timer">
                                    <div className="card-content white-text">
                                        <span className="card-title">Tomato Timer</span>
                                        <p>break down your work time efficiently!</p>
                                    </div>
                                    <div className="card-action">
                                        <a>
                                            <Link
                                            to="/timer"
                                            >go</Link>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="card mind">
                                    <div className="card-content white-text">
                                        <span className="card-title">Mindfulness</span>
                                        <p>need help concentrating?</p>
                                    </div>
                                    <div className="card-action">
                                        <a>
                                            <Link
                                            to="/mindfulness"
                                            >go</Link>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="card tasks">
                                    <div className="card-content white-text">
                                        <span className="card-title">Tasks</span>
                                        <p>view all your tasks!</p>
                                    </div>
                                    <div className="card-action">
                                        <a>
                                            <Link
                                            to="/tasks"
                                            >go</Link>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align">
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                backgroundColor: "#283644"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable"
                        >
                        Logout
                        </button>   
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);