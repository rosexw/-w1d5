//this is for https://web-compass.lighthouselabs.ca/days/w1d5/activities/99 exercise
//I am creating a tempertature converter
// It will receive the temperature in fahrenheit
//then calculate and output the temperature in celsius
//exportfile.js calls tempconverter.js

var converter = require("./tempconverter.js");
//var expect = require('chai').expect;


// describe('tempconverter()', function(){
// 	it('Should return 98.6 degrees fahrenheit is 37 degrees celsius', function(){
// 		expect(tempconverter(98.6)).to.equal(37);
// 	})
// })

converter.displayTemp(98.6);

