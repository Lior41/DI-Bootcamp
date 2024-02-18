const express = require('express');
const app = express();
const port = 3000;
const tasksRouter = require('./routes/tasks');

app.use(express.json()); 
app.use('/', tasksRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
