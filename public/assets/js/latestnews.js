$(document).ready(function() {

	$('#timesButton').on('click', function() {
		$.ajax({
			method: "GET",
			url: "/times"
		}).then(function(data) {
			console.log(data);

			$('#timesTitle').append("<h2>" + data.title + "</h2>");
			$('#timesText').append('<p>' + data.summary + '<p>');
			$('#timesLink').append('<a href=' + data.link + '> </a>')
		})
	});

	$('#postButton').on('click', function() {
		$.ajax({
			method: "GET",
			url: "/post"
		}).then(function(data) {
			console.log(data);

			$('#postTitle').append("<h2>" + data.title + "</h2>");
			$('#postText').append('<p>' + data.summary + '<p>');
			$('#postLink').append('<a href=' + data.link + '> </a>')
		})
	});

	$('#redditButton').on('click', function() {
		$.ajax({
			method: "GET",
			url: "/reddit"
		}).then(function(data) {
			console.log(data);

			$('#redditTitle').append("<h2>" + data.title + "</h2>");
			$('#redditText').append('<p>' + data.summary + '<p>');
			$('#redditLink').append('<a href=' + data.link + '> </a>')
		})
	});
});