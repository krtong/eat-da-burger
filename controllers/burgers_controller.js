const express = require("express");
const burger = require("../models/burger.js"); 
const router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all((burgers) => res.render("index", {burgers}));
});

//create new burger
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [req.body.name], ({insertId : id}) => res.json({id}));
});

router.put("/api/burgers/:id", function({params: {id}, body: {devoured}}, res) {
  var condition = `id = ${id}`;
  burger.update({devoured}, condition, ({changedRows: cR}) => cR === 0 ?  res.status(404).end() : res.status(200).end());
});

module.exports = router;