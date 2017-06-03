/* 2. Playing with chalk to make console.log look different.
Modify index.js to explore the functions of Chalk. Try chaining commands together to combine various styles.

Take a look through the source code on GitHub (https://github.com/chalk/chalk), including the project's package.json.

Play around with some of the functions found here:
https://github.com/chalk/chalk


CHaining
chalk.<style>[.<style>...](string, [string...])

Example: chalk.red.bold.underline('Hello', 'world');

Chain styles and call the last one as a method with a string argument. Order doesn't matter, and later styles take precedent in case of a conflict. This simply means that Chalk.red.yellow.green is equivalent to Chalk.green.

Multiple arguments will be separated by space.

*/

var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

console.log(`
	CPU: ${chalk.red('90%')}
	RAM: ${chalk.green('40%')}
	DISK: ${chalk.yellow('70%')}
	`);

console.log(chalk.bold.blue("hi"));

var name = "Sindre";
console.log(chalk.green('Hello %s'), name);
//the %s is string substitution, joins two strings together.

console.log(chalk.magenta.bold.underline('Hello', 'world'));
console.log(chalk.cyan.bold.underline('Hello', 'world'));
