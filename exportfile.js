/*1. Requiring Modules
Exercise
This is exportfile.js -- Implement your own module that exports an object containing a function. However the function you export should invoke a 'private' function that is defined within your module but not exported from it.
This is tempconver.js  -- Implement a Node.js script that imports the functionality of your module and invokes at least one exported function.
What I made is a temperature converter that takes the degrees in fahrenheit and calculates it in celsius.
*/


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
