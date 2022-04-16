const router = require("express").Router();
const {saveNote} = require ('../../db/db.json');

//Retrieve note route
router.get('/notes', (req, res) => {
    saveNote
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

//Post route
router.post('/notes', (req, res) => {
   saveNote
   .addNote(req.body)
   .then((note) => res.json(note))
   .catch((err) => res.status(500).json(err));
       
});
//Delete route (array.filter())

router.delete('/notes/:id', (req, res) => {
    saveNote
    .deleteNote(req.params.id)
    .then(() =>res.json({ ok: true}))
    .catch((err) => res.status(500).json(err)); 
});

module.exports = router;