// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.listen(3000)

require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// const { getAllNotes } = require('./service/dbData');

app.use(express.json());
// app.use(cors({origin: 'http://localhost:5173',}));
app.use(cors());

router.get('/',require('./controllers/hello-world'));
// get all notes
router.get('/notes', require('./controllers/getAllNotes'));

// create a note
router.post('/create-note',require('./controllers/createNote'));
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});