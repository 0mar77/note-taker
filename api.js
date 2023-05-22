const express = require('express')

// Creates router variable
const router = express.Router()

// Imports uuid package. This will be used to create an id
const { v4: uuidv4 } = require('uuid');

// Makes connection to database
const db = require('./db/db.json');

// Imports file system
const fs = require('fs');

// Calls all of the data in the database
router.get('/', (req, res) => res.json(db));

// Finds data with specific id
router.get('/:id', (req, res) => {})

// Creates a new post
router.post('/', (req, res) => {
    // Reads the current data
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        // Variable containing user inputs
        const newNote = {
            title: req.body.title, // title of note
            text: req.body.text,   // text of the note
            id: uuidv4()           // creates an id for the note using uuid
        }
        // Pushes new note into the database with existing data
        notes.push(newNote);

        // Creates file with new user inputs
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if(err){
                console.log(err)
            }
        })

        res.send(newNote)
    })
});

module.exports = router;