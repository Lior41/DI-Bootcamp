const express = require('express');
const router = express.Router();


let todos = [];


router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  todos.push(req.body);
  res.status(201).send('To-do added.');
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  todos = todos.map(todo => (todo.id === id ? { ...todo, content } : todo));
  res.send('To-do updated.');
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.send('To-do deleted.');
});

module.exports = router;
