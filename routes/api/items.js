const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Item.js");

//@route GET API/items
//@desc GET all Items
//@access Public
router.get("/", (req, res) => {
    Item.find()
    //descending order 
    .sort({date: -1})
    .then(items => res.json(items));
});

//get one item
router.get("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item));
});

//@route POST API/items
//@desc CREATE ITEM
//@access Public
router.post("/", (req, res) => {
    const newItem = new Item({
        taskName: req.body.taskName,
        taskType: req.body.taskType,
        dueDate: req.body.dueDate,
        taskMemo: req.body.taskMemo
    });
    newItem.save().then(item => res.json(item));
});

//@route DELETE API/items
//@desc DELETE ITEM
//@access Public
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));

});

module.exports = router;

