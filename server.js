const express = require('express');
const fs = require('fs');

const PORT = 3001;
const app = express();

app.use(express.static('public'))
app.use(express.json());

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

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
