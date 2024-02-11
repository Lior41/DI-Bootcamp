const express = require('express');
const app = express();
const port = 3000;

const quizRoutes = require('./quizRoutes');

app.use('/', quizRoutes);

app.listen(port, () => {
  console.log(`Trivia quiz app listening at http://localhost:${port}`);
});
