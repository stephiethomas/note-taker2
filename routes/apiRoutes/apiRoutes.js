const fs = require('fs');
const router = express.Router();

// save note
const saveNote = fs.readFileSync(path.join(__dirname, '../db/db.json'));

//Retrieve note route
router.get('/notes', (req, res) => {
    res.json(saveNote);
});

//Post route
router.post('/notes', (req, res) => {
    let pushNote = req.body;
    saveNote.push(pushNote);

    fs.writeFileSync('/db/db.json', JSON.stringify(saveNote));
    res.json(saveNote);
});

// router.get('/notes/:id', (req, res) => {
//     const note = findByID(req.params.id, notes);
//     if(note) {
//        res.json(notes);
//     } else {
//         res.send(404);
//     }
    
// });

module.exports = router;