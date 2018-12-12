// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    create: function (col, val, cb) {
        orm.insertOne("burgers", col, val, function (res) {
            cb(res);
        });
    },
    update: function (objVal, condition, cb) {
        orm.updateOne("burgers", objVal, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;