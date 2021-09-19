var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
const {AuthRequest} = require('./middlewares/auth-request.middleware')

const { connectDB } = require("./config/db.config");
connectDB();

const todosRoutes = require("./routes/todos.routes");
const authRoutes = require("./routes/auth.routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', AuthRequest, todosRoutes)
app.use('/auth', authRoutes);


app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);
  res.json(err);
});

module.exports = app;
