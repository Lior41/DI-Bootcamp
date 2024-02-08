const fs = require('fs');

function read(filePath){
    fs.readFile(filePath,'utf8', (err, data)=>
    {
        if (err){
            console.error('Error reading the file', err);
            return;
        }
        console.log(data);
    });
}

module.exports = read ; 