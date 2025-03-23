const pool = require('./dbConnection');

// get all notes

const getAllNotes = async () => {
    try {
        const [result] = await pool.query(' SELECT * FROM Notes ');
        return result;
    } catch (err) {
        console.log('Error while fetching all notes :- ', err);
        res.status(500).json({ message: 'Error while fetching all notes' });
    }
}

module.exports = { getAllNotes };