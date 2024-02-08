const fs = require('fs');
const path = require('path');

function displayFileInfo() {
  const filePath = path.join(__dirname, 'data', 'example.txt');

  console.log(`Checking for file at: ${filePath}`);

  const exists = fs.existsSync(filePath);
  console.log(`File exists: ${exists}`);

  if (exists) {
 
    const stats = fs.statSync(filePath);
    console.log(`File size: ${stats.size} bytes`);
    console.log(`Created on: ${stats.birthtime}`);
  } else {
    console.log('Unable to find the file. Please check the path and file name.');
  }
}

module.exports = displayFileInfo;
