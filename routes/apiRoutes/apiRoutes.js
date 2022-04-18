const router = require("express").Router();
const fs = require('fs');
// const {saveNote} = require ('../../db/saveNote.js');
let notes = require('../../db/db.json');
const {v4: uuidv4} = require("uuid");


//Retrieve note route
router.get('/notes', (req, res) => {
 res.json(notes);
});
  
//Post route
router.post('/notes', (req, res) => {
    const note = req.body;
    note.id = uuidv4();
    notes.push (note);
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err, data) =>{
        if(err) throw err
    })
    res.json(notes)
       
});
 
//Delete route (array.filter())

router.delete('/notes/:id', (req, res) => {
     const id = req.params.id;
     const newNote = notes.filter((keptNote) =>{
        return keptNote.id !== id;
     })
     fs.writeFile("./db/db.json", JSON.stringify(newNote), (err, data) => {
         if(err) throw err
     })
     res.json(newNote) 

    //  fs.readFile("./db/db.json", "utf8", (err, data) =>{
    //      if(err) throw err
    //     else{
    //         res.json(notes)
    //     } 
    //  })
     
});


module.exports = router;