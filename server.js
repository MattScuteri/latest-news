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

const PORT = 3000;

let app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/latestNews');

app.get('/times', function(req, res) {
	axios.get('https://www.nytimes.com/').then(function(response) {
		let $ = cheerio.load(response.data);

		$(###).each(function(i, element) {
			let timesResult = {};

			//Add scrape information for NY Times here

			//Add new Article object to article model
		});
	});
});

app.get('/post', function(req, res) {
	axios.get('https://www.washingtonpost.com/').then(function(response) {
		let $ = cheerio.load(response.data);

		$(###).each(function(i, element) {
			let postResult = {};

			//Add scrape information for Post

			//Add new Article object to article model
		})
	})
})

app.get('/reddit', function(req, res) {
	axios.get('https://www.reddit.com/r/news/').then(function(res, req) {
		let $ = cheerio.load(response.data);

		$(###).each(function(i, element) {
			let redditResult = {};
		});
	});
});

app.listen(PORT, function() {
	console.log('App running on port ' + PORT);
})