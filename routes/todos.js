const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodos,getTodoById } = require("../controllers/getTodo.js");
const { updateTodo} = require("../controllers/updateTodo");

//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);

module.exports = router;