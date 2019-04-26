const express = require('express');
const ejs = require('ejs');

blog_route = express.Router();

blog_route.get('/', (req, res) => {
    res.render('createblog');
});

blog_route.get('/createblog', (req, res) => {
    res.send('Will help users to create blogs');

});

module.exports = blog_route;