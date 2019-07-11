var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");
console.log(burger);
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbsOjbect = {
            burger: data
        };
        res.render("index", hbsOjbect);
    });
});

router.post("/api/burgers", function(req,res) {
    burger.createOne(["burger_name", "devoured"],[req.body.burger_name, req.body.devoured], function(result){
        console.log("/api/burgers post result: " + result);
        res.json({ id: result.insertId});
    });
});

router.put("/api/cats/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    console.log("the condition: " + condition);
    burger.update({devoured: req.body.devoured}, condition, function(result){
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;