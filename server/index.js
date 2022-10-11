const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const path=require("path")
const proxy = require('http-proxy-middleware');
require('dotenv').config();

app.use(cors());
app.set("views", path.join(__dirname, "templates"));
app.set("trust proxy", 1); // trust first proxy
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "templates")));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./service/database')
app.use(require('./router'));

const server = app.listen(5000, () => console.log('Listening on port 5000'));