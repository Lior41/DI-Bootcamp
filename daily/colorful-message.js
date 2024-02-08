async function displayColorfulMessage() {
    const chalk = await import('chalk');
    console.log(chalk.default.blue('This is a colorful message!'));
}

module.exports = displayColorfulMessage;
