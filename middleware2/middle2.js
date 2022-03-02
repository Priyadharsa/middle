const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let name;
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', (req, res, next) => {
    next();
});
app.get('/add-username', (req, res, next) => {
    res.send('<form action="/post-username" method="POST"> <input type="text" name="username"> <button    type="submit"> Send </button> </form>');
});
app.post('/post-username', (req, res, next) => {
    name = req.body.username;
    console.log('data: ', req.body.username);
    res.send('<h1>Hi <h1>' +
        req.body.username + '<h1>, Welcome to the middleware<h1>');
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    res.send('<h1> first midleware: Hello </h1>');

});
const server = http.createServer(app);
server.listen(3000);