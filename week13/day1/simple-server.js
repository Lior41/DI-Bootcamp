 const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('<html><body><h1>Welcome to My Server</h1></body></html>');
//     } else if (req.url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('<html><body><h1>About Us</h1><p>This is the about page.</p></body></html>');
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.end('<html><body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body></html>');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


const json ={
    "menu":{
        "firstCourse":"Vegetable Soup",
        "mainCourse": "Hamburger",
        "dessert": "Fruit salade"
    }
};

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(json));

});

server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})