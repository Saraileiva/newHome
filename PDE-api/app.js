var cors = require("cors")
var express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./config/database");

const apiRouter = require("./routes/api/index.router")

var app = express();

db.getConnection();

// configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOpcions = {
    origin: function (origin, callback){
        console.log(origin);
        if (whitelist.includes(origin)){
            //puede consultar la API
            callback(null, true)
        } else {
            callback(new Error("Error de Cors"));
        }
    },
};

app.use(cors(corsOpcions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", apiRouter);

module.exports = app;
