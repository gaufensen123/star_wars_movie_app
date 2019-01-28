var moviesJSON = require('../movies.json');

// Home Route
exports.home = function(req, res) {

	var movies = moviesJSON.movies;

	res.render('home', {
		title: "Star Wars Movies",
		movies : movies
	});
};

// Movie-single route
exports.movie_single = function(req, res) {
	var episode_number = req.params.episode_number;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number >= 1 && episode_number <= 6) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;
		
		res.render('movie_single', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

// Route for all other page requests
exports.notFound = function(req, res) {
	var movies = moviesJSON.movies;
	res.render('notFound', {
		movies : movies,
		title : "Oops, this page doesn't exist"
	});
};