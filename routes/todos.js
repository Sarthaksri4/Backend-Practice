const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodos,getTodoById} = require("../controllers/getTodo.js");


//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodoById);

module.exports = router;