const { program } = require('commander');
const greet = require('./commands/greet');
const fetch = require('./commands/fetch');
const read = require('./commands/read');

program
  .version('0.1.0')
  .description('Ninja Utility Command Line Tool');

program
  .command('greet <name>')
  .description('Greet a user')
  .action(greet);

program
  .command('fetch')
  .description('Fetch data from an API')
  .action(fetch);

program
  .command('read <filePath>')
  .description('Read a file')
  .action(read);

program.parse(process.argv);
