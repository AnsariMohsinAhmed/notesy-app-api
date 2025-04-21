const controller = (req, res) => {
    console.log('req.body :- ', req.body);
    try {
        res.status(200).json({ message: 'create note api called!' });
    } catch (err) {
        console.log('error creating a note :- ', err);
        res.status(500).json({ message: err });
    }
};

module.exports = controller;