var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    createOne: function(cols, vals, callback) {
        orm.createOne("burgers", cols, vals, function(res) {
            callback(res);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;