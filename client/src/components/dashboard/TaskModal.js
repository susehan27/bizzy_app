import React, {Component} from "react";
import {connect} from "react-redux";
import {addItem} from "../../actions/itemActions";
import {Modal, Button, Row, Input} from "react-materialize";

class TaskModal extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            taskName: "",
            taskType: "",
            dueDate: "",
            taskMemo: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            taskName: this.state.taskName,
            taskType: this.state.taskType,
            dueDate: this.state.dueDate,
            taskMemo: this.state.taskMemo
        };

        //add task via addItem action
        this.props.addItem(newItem);

        this.toggle();
    }

    render() {
        return(
            <div className="row">
                <div className="col s12 center-align">
                    
                    <Modal 
                        header="Add Task"
                        trigger={<Button className="pulse">add task</Button>}
                    >
                        <Row>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12 center-align">
                                    <input 
                                        type="text"
                                        name="taskName"
                                        onChange={this.onChange}
                                    />
                                    <label for="taskName">Task Name</label>
                                </div>
                                <div className="input-field col s12 center-align">
                                    <input 
                                        type="date"
                                        name="dueDate"
                                        onChange={this.onChange}
                                    />
                                    <label for="taskDate">Due Date</label>
                                </div>
                                <div className="input-field col s12 center-align">
                                    <div>
                                        <label className="left" for="taskType">Type of Task</label>
                                    </div>
                                    <select
                                        name="taskType" 
                                        onChange={this.onChange}
                                        className="browser-default"
                                    >
                                        <option value="" disabled selected>Choose one</option>
                                        <option value="School">School</option>
                                        <option value="Work">Work</option>
                                        <option value="Home">Home</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Extracurricular">Extracurricular</option>
                                    </select>
                                </div>
                                <div className="input-field col s12 center-align">
                                    <input 
                                        type="text"
                                        name="taskMemo"
                                        onChange={this.onChange}/>
                                    <label for="taskMemo">Memo</label>
                                </div>
                                <div className="modal-footer">
                                    <Button type="submit" className="modal-action modal-close btn btn-flat">Add</Button>
                                </div>
                            </form>
                        </Row>
                    </Modal>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(TaskModal);