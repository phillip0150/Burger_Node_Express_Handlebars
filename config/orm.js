var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (??);";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if(err) throw err;
            callback(result);
        });
    },
    updateOne: function(table, objColsVals, condition, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ? ";
        connection.query(queryString, [table, objColsVals, condition], function(err, result) {
            if(err) throw err;
            callback(result);
        });
    }

};

module.exports = orm;