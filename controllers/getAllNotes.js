const { getAllNotes } = require('../service/dbData');

const controller = async(req, res) => {
    try {
        const result = await getAllNotes();
        res.status(200).json(result);
    } catch (err) {
        console.log('Error occured while fetching all notes :- ', err);
        res.status(500).json({ message: err });
    }
};

module.exports = controller;