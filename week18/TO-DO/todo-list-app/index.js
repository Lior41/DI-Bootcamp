const express = require('express');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 3000;


const db = require('./database');


app.use(cors());
app.use(express.json());


app.get('/todos', async (req, res) => {
  try {
    const todos = await db.select('*').from('todos');
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/todos', async (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ error: 'Invalid todo text' });
  }

  try {
    const [newTodo] = await db('todos').insert({ text: text.trim() }).returning('*');
    res.json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/todos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const deleted = await db('todos').where('id', id).del();
    if (deleted) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
