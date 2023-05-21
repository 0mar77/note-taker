const express = require('express');
const fs = require('fs');
const api = require('./api')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/notes', api);

app.use(express.static('public'))

app.get('/', (req, res) => {
    fs.readFile('public/index.html', 'utf8', (err, html) => {
        res.send(html);
    })
})

app.get('/notes', (req, res) => {
    fs.readFile('public/notes.html', 'utf8', (err, html) => {
        res.send(html);
    })
})

app.listen(PORT);
