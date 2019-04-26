const express = require('express');

blog_route = express.Router();

blog_route.get('/', (req, res) => {
    res.send('Will show Blog Home Page');
});

blog_route.get('/create_blog', (req, res) => {
    res.send('Will help users to create blogs');

});
