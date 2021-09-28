const express = require("express");
const router = express.Router();
const {Todo,} = require("../models/todo.model");
const jwt = require("jsonwebtoken");


router.get("/getTodos", async (req, res) => {
  const user = req.user;
  const todos = await Todo.find({ "createdBy.id": user.id });
  res.status(200).json({ todos });
});

router.post("/createTodos", async (req, res) => {
  const { title, content } = req.body;
  const user = req.user;

  const todo = new Todo({
    title,
    content,
    createdBy: {
      id: user.id,
      name: user.name,
    },
  });

  await todo.save();
  res.status(201).json({ todo });
});

router.put("/updateTodos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const user = req.user;

  const todo = await Todo.findOneAndUpdate(
    {
      _id: id,
      "createdBy.id": user.id,
    },
    {
      title,
      content,
    }
  );

  if (!todo) return res.status(404).json({ msg: "Todo Not Found" });
  res.status(201).json({ msg: "Todo Updated" });
});

router.delete("/deletetodos/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  const todo = await Todo.findOneAndDelete({
    _id: id,
    "createdBy.id": user.id,
  });

  if (!todo) return res.status(404).json({ msg: "Todo Not Found" });

  res.status(200).json({ msg: "Todo Deleted" });
});

module.exports = router;
