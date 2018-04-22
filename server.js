//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');
const logger = require('morgan');
const axios = require('axios');
const mongoose = require('mongoose');
const db = require('./models');

const PORT = process.env.PORT || 3000;

let app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/latestNews');

require('./controllers/scraper-controller.js')(app);
require('./controllers/article-controller.js')(app);

app.listen(PORT, function() {
	console.log('App running on port ' + PORT);
})