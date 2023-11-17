var express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./config/database");

const apiRouter = require("./routes/api/index.router")

var app = express();

db.getConnection();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", apiRouter);

module.exports = app;
