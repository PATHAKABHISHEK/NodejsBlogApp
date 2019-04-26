const express = require('express');

blog_route = express.Router();

blog_route.get('/', (req, res) => {
    res.send('Will show Blog Home Page');
});

blog_route.get('/createblog', (req, res) => {
    res.send('Will help users to create blogs');

});

module.exports = blog_route;