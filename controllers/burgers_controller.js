var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res) {
    burger.createOne(["burger_name"],[req.body.burger_name], function(result){
        console.log("/api/burgers post result: " + result);
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    console.log("the condition: " + condition);
    console.log(req.body.devoured);
    burger.updateOne(req.body.devoured, condition, function(result){
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;