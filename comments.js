// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;

app.use(bodyParser.json());

// Create a comments array
const comments = [
    {
        id: 1,
        username: 'alice',
        comment: 'I love this article!'
    },
    {
        id: 2,
        username: 'bob',
        comment: 'This article is terrible'
    }
]