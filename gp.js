const express = require('express');
const { pool } = require("./db");
const app = express();
let name;
let password;
const requireJsonContent = () => {

    return (req, res, next) => {

        if (req.headers['content-type'] !== 'application/json') {

            res.status(400).send('Server requires application/json')

        } else {

            next()

        }

    }

}

app.use('/', (req, res, next) => {
    console.log("Time for :", new Date())
    next();
});
app.get('/', function(req, res, next) {
    name = req.query.name;
    password = req.query.password;

    if (name == 'dharsan' && password == '12345') {
        res.write('welcome to the page');
        res.end();
    } else {
        res.write('Please enter correct Username and Password!');
        next();
    }
});

app.listen(3000);