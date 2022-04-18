// const fs = require('fs');
// const { getEnabledCategories } = require('trace_events');
// const util = require('util');
// const uuidv1 = require('uuid/v1');
// const { getEnvironmentData } = require('worker_threads');
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class saveNote {
//     read() {
//         return readFileAsync('db/db.json', 'utf8');
//     }
//     write(note) {
//         return writeFileAsync('db/db.json', JSON.stringify(note));
//     }
//     getNote() {
//         return this.read().then((notes) => {
//             let parsedNotes;
//             try{
//                parsedNotes = [].concat(JSON.parse(notes));
//             } catch(err) {
//                 parsedNotes = []
//             }
//             return parsedNotes;
//         });
//     }
//     addNote(note) {
//         const { title, text } = note;
//         if (!title || !text) {
//             throw new Error("Note The title & text can't be blank");

//         }
//         const newNote = { title, text, id: uuidv1()};

//         return this.getNote()
//         .then((notes) => [...notes,newNote])
//         .then((updateNotes) => this.write(updateNotes))
//         .then(() => newNote);
//     }
    
//     deleteNote(id) {
//         return this.getNote()
//         .then((notes) => notes.filter((note) => note.id !== id))
//         .then((filterNote) => this.write(filterNote));
//     }
// }
// module.exports = saveNote();