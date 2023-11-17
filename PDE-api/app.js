var express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./config/database");
//import cors from "cors";

const apiRouter = require("./routes/api/index.router")

var app = express();

db.getConnection();

// configurar CORS
/*const whitelist = ["http://localhost:5174/"];

const corsOpcions = {
    origin: function (origin, callback){
        if (whitelist.includes(origin)){
            callback(null, true)
        } else {
            callback(new Error("Error de Cors"));
        }
    },
};

app.use(cors(corsOpcions));*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", apiRouter);

module.exports = app;
