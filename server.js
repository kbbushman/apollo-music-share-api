const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use('/', (req, res) => res.send('<h1>Apollo Music Share API</h1>'));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
