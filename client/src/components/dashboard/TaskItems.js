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

        //this.handleChange = this.handleChange.bind(this);
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
                            style={{width: "40vh", height: "40vh", margin: "10px", float: "left", backgroundColor: "#e0d5bf"}} 
                            onChange={this.handleChange}
                            key={_id}
                            className="roboto card black-text"
                            title={taskName}
                            actions={[
                            <div>
                                <Button onClick={this.onClick.bind(this, _id)}>complete</Button>
                                <Button
                                        className="remove-btn"
                                        id="xButton"
                                        color="light"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                >&times;
                                </Button>
                            </div>
                            ]}
                        >
                            <div style={{overflow:"scroll"}}>
                                <p><strong>Type:</strong> {taskType}</p>
                                <p><strong>Due Date:</strong> {dueDate}</p>
                                <p><strong>Memo:</strong> {taskMemo}</p>
                            </div>
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
