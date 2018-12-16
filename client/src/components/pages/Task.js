import React, {Component} from "react";
import TaskModal from "../dashboard/TaskModal.js";
import UserNavBar from "../dashboard/UserNavBar.js";
import TaskItems from "../dashboard/TaskItems.js";
import "./style.css";

class Task extends Component {
    render() {
        return(
            <div className="row">
                <UserNavBar/>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4 className="vidaloka">Keep track of everything you need to get done by adding your tasks!</h4>
                    </div>
                </div>
                <div className="row">
                    <TaskModal/>
                </div>

                <div className="row">
                    <TaskItems/>
                </div>

            </div>
        )
    }
}

export default Task;