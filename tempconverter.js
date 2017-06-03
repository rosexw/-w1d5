// 1. tempconverter, exports from exportfile.js
// this is for https://web-compass.lighthouselabs.ca/days/w1d5/activities/99 exercise
//I am creating a tempertature converter
// It will receive the temperature in fahrenheit
//then calculate and output the temperature in celsius
//exportfile.js calls tempconverter.js

var displayTemp = function(temperature){
	console.log(temperature, "degrees fahrenheit is ", tempconverter(temperature), "degrees celsius.");
}

var tempconverter = function(fahrenheit) {
	var celsius = (fahrenheit-32)*5/9;
	return celsius;
}

module.exports = {
	displayTemp: displayTemp
}
