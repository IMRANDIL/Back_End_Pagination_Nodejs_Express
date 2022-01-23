const express = require('express');

require('dotenv').config();

const path = require('path');
const app = express();
const cors = require('cors');
const router = require('./routes/Router');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middlewares..
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', router);






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
})