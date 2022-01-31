const fs = require('fs');
const router = require("express").Router();
// const path = require('path');
const {saveNote} = require ('../../db/db.json');
// const {updateNote} = require('../..db/db/json');
const {v4: uuidv4} = require('uuid');
// const deleteNote = require('deleteNote');


//  const saveNote = fs.readFileSync(path.join(__dirname, '../../db/db.json'));

//Retrieve note route
router.get('/notes', (req, res) => {
    res.json(saveNote);
});

//Post route
router.post('/notes', (req, res) => {
   let newNote = req.body.id;
   res.json(newNote);
//    return console.log("+newNote.title.uuid")
   
    fs.readFileSync("db/db.json", (err, jsonString) => {
        newNote = JSON.parse(jsonString);
        return;
    }); 
    
       

   const writeFile = writeNote => {
       return new Promise((resolve, reject) => {
           fs.writeFileSync('db/db.json', writeNote, err => {
               if (err) {
                   reject(err);
                   return;
               }
               ok: true,
               message; 'success'
               
           });

       });
   };

    // fs.writeFileSync('/db/db.json', JSON.stringify(saveNote));
    // res.json(saveNote);
});

//Delete route (array.filter())

router.delete('/notes/:ID', (req, res) => {
    notes.splice(req.params.ID, 1);
    updateNote();

    const deleteNote = updateNote => {
        fs.writeFile('db/db.json', JSON.stringify(notes, '/'), err => {
            if (err);
            return;
        });
    };
});

module.exports = router;