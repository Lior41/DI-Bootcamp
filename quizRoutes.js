const express = require ('express');
const router = express.Router();
const triviaQuestions = require('./triviaQ');

let score = 0;
let currentQuestionIndex = 0;

router.get('/quiz',(req,res)=>{
    if (currentQuestionIndex < triviaQuestions.length){
        res.json ({question:triviaQuestions[currentQuestionIndex].question }); 
    } else {
        res.send('Quiz complated. Use /quiz/score to see your score.');
    }
});

router.post('/quiz',express.json(),(req,res)=>{
    const userAnswer = req.body.answer;
    const correctAnswer = triviaQuestions[currentQuestionIndex].answers;
    if (userAnswer.toLowerCase()===correctAnswer.toLowerCase()){
        score++;
        res.send('Correct!');
    } else {
        res.send('Incorrect!');
    }

currentQuestionIndex++;

if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
  } else {
    res.send('Quiz completed. Use /quiz/score to see your score.');
  }
});

router.get('/quiz/score', (req, res) => {
  res.send(`Your final score is ${score}/${triviaQuestions.length}.`);
});

module.exports = router;