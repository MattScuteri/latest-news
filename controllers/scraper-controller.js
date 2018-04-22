const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios');

const modelArticle = require('../models/Article.js');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render("layouts/main");
	})

	app.get('/times', function(req, res) {
		axios.get('https://www.nytimes.com/').then(function(response) {
			let $ = cheerio.load(response.data);

			$("div first-column-region region").each(function(i, element) {
				let timesResult = {};

				timesResult.title = $(this).children('h2');
				timesResult.summary = $(this).children('p summary');
				timesResult.link = $(this).children('h2').attr('href');

				console.log(timesResult);

				db.Article.create(result).then(function(dbArticle) {
					console.log(dbArticle);
				}).catch(function(err) {
					return res.json(err);
				});
			});
		});
	});

	app.get('/post', function(req, res) {
		axios.get('https://www.washingtonpost.com/').then(function(response) {
			let $ = cheerio.load(response.data);

			$("border-bottom-hairline").each(function(i, element) {
				let postResult = {};

				postResult.title = $(this).children('div headline');
				postResult.summary = $(this).children('div blurb');
				postResult.link = $(this).children('div headline').attr('href');

				db.Article.create(result).then(function(dbArticle) {
					console.log(dbArticle);
				}).catch(function(err) {
					return res.json(err);
				});
			});
		});
	});

	app.get('/reddit', function(req, res) {
		axios.get('https://www.reddit.com/r/news/').then(function(res, req) {
			let $ = cheerio.load(response.data);

			$('p.title').each(function(i, element) {
				let redditResult = {};
			
				redditResult.title = $(this).text();
				redditResult.link = $(this).children().attr('href');

				db.Article.create(result).then(function(dbArticle) {
					console.log(dbArticle);
				}).catch(function(err) {
					return res.json(err);
				});
			});
		});
	});
}