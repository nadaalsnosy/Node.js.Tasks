const mongoose = require("mongoose");
const articaleSchema = new mongoose.Schema({
  title: {
    type: String,
    completed: false,
    required: true,
  },
  content: {
    type: String,
    completed: false,
    required: true,
  },
  createdBy: {
    id: {
      type: String,
      completed: false,
      required: true,
    },
    name: {
      type: String,
      completed: false,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todos", articaleSchema);

module.exports = { Todo };
