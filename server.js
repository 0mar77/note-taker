// Imports all packages needed
const express = require('express');
const fs = require('fs');
// Imports routes from api.js
const api = require('./api')

// Creates Port with process.env so that it can work with Heroku
const PORT = process.env.PORT || 3001;
// Creates express app
const app = express();

// Middleware that allows the reading of JSON and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Calls routes from api.js
app.use('/api/notes', api);

// Allows the reading of static pages
app.use(express.static('public'))

// Route to and render home page (index.html)
app.get('/', (req, res) => {
    fs.readFile('public/index.html', 'utf8', (err, html) => {
        res.send(html);
    })
})

// Route to and render notes page (notes.html)
app.get('/notes', (req, res) => {
    fs.readFile('public/notes.html', 'utf8', (err, html) => {
        res.send(html);
    })
})

// Starts the app on port 3001
app.listen(PORT);
