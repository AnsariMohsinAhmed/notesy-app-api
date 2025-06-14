const { createNote } = require("../service/dbData");

const controller = async (req, res) => {
    const note = req.body.note;

    try {
        const result = await createNote(note);
        if (result) {
            res.status(200).json({ id: result, note: note, message: 'Note created' });
        }
    } catch (err) {
        console.log('error creating a note :- ', err);
        res.status(500).json({ message: err });
    }
};

module.exports = controller;