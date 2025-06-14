const pool = require('./dbConnection');

// get all notes

const getAllNotes = async () => {
    try {
        const [result] = await pool.query('CALL sp_getAllNotes()');
        return result[0];
    } catch (err) {
        console.log('Error while fetching all notes :- ', err);
        res.status(500).json({ message: 'Error while fetching all notes' });
    }
}

// create a note

const createNote = async (note) => {
    try {
        const [result] = await pool.query('CALL sp_createNote(?)', [ note ]);
        return result[0][0].id;
    } catch (err) {
        console.log('Error creating a note :- ', err);
        res.status(500).json({ message: 'Error while creating note!' });
    }
};

module.exports = { getAllNotes, createNote };