const path = require('path');
console.log(path.basename(__filename));
console.log('hello world!');
var giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke(function(joke) {
	console.log(joke);
});