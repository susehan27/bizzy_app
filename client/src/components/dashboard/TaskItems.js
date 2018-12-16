import React, {Component} from "react";
import {connect} from "react-redux";
import {getItems, getItem, deleteItem} from "../../actions/itemActions";
import PropTypes from "prop-types";
import {Col, Card, Button} from "react-materialize";


class TaskItems extends Component {
    constructor() {
        super();
        this.state = {
            color: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.color
        })
        if (this.props.item.taskType === "School") {
            this.setState({color: "93462e"});
        }
        else if (this.props.item.taskType === "Work") {
            this.setState({color: "e0d5bf"});
        }
        else if (this.props.item.taskType === "Home") {
            this.setState({color: "998f7e"});
        }
        else if (this.props.item.taskType === "Personal") {
            this.setState({color: "283644"});
        }
        else {
            this.setState({color: "ff7d5a"});
        }
    }

    componentDidMount() {
        this.props.getItems();   
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    onClick = (id) => {
        this.props.getItem(id);
    }

    render() {
        const {items} = this.props.item;

        return(
            <div className="col s12">
                
                    {items.map(({_id, taskName, taskType, dueDate, taskMemo}) => (
                        <Card 
                            style={{backgroundColor: this.state.color, margin: "10px", float: "center", backgroundColor: "#e0d5bf"}} 
                            onChange={this.handleChange}
                            key={_id}
                            textClassName='black-text' 
                            className="roboto card col s3"
                            title={taskName}
                            name={taskType}
                        >
                            <div className="card-content">
                                <p><strong>Type:</strong> {taskType}</p>
                                <p><strong>Due Date:</strong> {dueDate}</p>
                                <p><strong>Memo:</strong> {taskMemo}</p>
                            </div>
                            <Button onClick={this.onClick.bind(this, _id)}>complete task</Button>
                            
                            <Button
                                    className="remove-btn"
                                    id="xButton"
                                    color="light"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                >&times;
                            </Button>
                        </Card>
                    ))}
                
            </div>
        )
    }
}

TaskItems.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    {getItems, getItem, deleteItem}
)(TaskItems);
