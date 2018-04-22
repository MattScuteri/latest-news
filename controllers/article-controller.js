const modelArticle = require("../models/Article.js");

module.exports = function(app) {
	app.get('/times', function(req, res) {
		modelArticle.find({})
		.then(function(articles) {
			res.render('index', {articles: articles});
		})
		.catch(function(err) {
			res.json(err)
		});
	});

	app.get('/post', function(req, res) {
		modelArticle.find({})
		.then(function(articles) {
			res.render('index', {articles: articles});
		})
		.catch(function(err) {
			res.json(err);
		});
	});
	
	app.get('/reddit', function(req, res) {
		modelArticle.find({})
		.then(function(articles) {
			res.render('index', {articles: articles});
		})
		.catch(function(err) {
			res.json(err);
		});
	});
};