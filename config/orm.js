
const connection = require("../config/connection.js");

module.exports = {
  selectAll: function(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, res) => err ? err : cb(res));
  },
  insertOne: async function(table, cols, vals, cb) {
    const queryString = `INSERT INTO ${table} (${cols}) VALUES (${Array(vals.length).fill('?').toString()});`;
    connection.query(queryString, vals, (err, res) => err ? err : cb(res));
  },
  updateOne: function(table, objColVals, condition, cb) {
    const queryString = `UPDATE ${table} SET ${Object.keys(objColVals).map(key => `${key} = ${objColVals[key]}`)} WHERE ${condition};`;
    connection.query(queryString, (err, res) => err ? err : cb(res));
  }
};

