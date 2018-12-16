import React, {Component} from "react";
import {Link} from "react-router-dom";
import bizzyB from "./images/bizzyB.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class UserNavBar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    
    render() {
        const { user } = this.props.auth;

        return (
            <div className="row navbar-fixed">
                <nav
                    style={{
                        backgroundColor: "#ff7d5a",
                    }}
                >
                    <div className="nav center">
                        <ul id="nav-mobile" className="right">
                            <li>
                                <Link
                                    to="/dashboard"
                                >Dashboard</Link>
                            </li>
                            <li>
                                <Link
                                    to="/tasks"
                                >My Tasks</Link>
                            </li>
                            <li>
                                <Link
                                    to="/timer"
                                >Timer</Link>
                            </li>
                            <li>
                                <Link
                                    to="/mindfulness"
                                >Mindfulness</Link>
                            </li>
                            <li>
                                <a
                                    onClick={this.onLogoutClick}
                                >Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

UserNavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(UserNavBar);