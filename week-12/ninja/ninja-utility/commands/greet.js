async function greet(name) {
    const chalk = await import('chalk');
    console.log(chalk.default.green(`Hello, ${name}! Welcome to Ninja Utility.`));
}

module.exports = greet;
