// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const indexRouter = require('./routes/index');
const tripsRouter = require('./routes/trips');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/trips', tripsRouter);

app.listen(3000, () => console.log('Travel Journal App listening on port 3000'));

module.exports = app;