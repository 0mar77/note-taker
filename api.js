const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const db = require('./db/db.json');
const fs = require('fs');

// router.use(express.json());
// router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => res.json(db));

router.get('/:id', (req, res) => {})

router.post('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        }
        notes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if(err){
                console.log(err)
            }
        })

        res.send(newNote)
    })
});

module.exports = router;