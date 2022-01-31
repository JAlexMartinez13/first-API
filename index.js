// Bring Express in
const { response } = require('express');
const express = require('express');

// Creates a Express API
const app = express();

// 
app.get('/', (request, response) => {
    response.send('My first Express API... WORKS!');
});


// 
app.listen(3000, () => console.log('Listening on port 3000...'));