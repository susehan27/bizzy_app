const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    taskType: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    taskMemo: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model("item", ItemSchema);
