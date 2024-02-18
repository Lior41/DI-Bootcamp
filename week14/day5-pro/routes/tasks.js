const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, '../tasks.json');



function loadTasks() {
    try {
        const tasksData = fs.readFileSync(tasksFilePath);
        return JSON.parse(tasksData);
    } catch (error) {
        return [];
    }
}

function saveTasks(tasks){
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

router.get('/tasks', (req, res) => {
    const tasks = loadTasks(); 
    res.json(tasks);
});
router.post('/tasks', (req, res) => {
    const tasks = loadTasks(); 
    if (!req.body.name) { 
        return res.status(400).send('Task name is required');
    }
    const task = {
        id: tasks.length + 1,
        ...req.body
    };
    tasks.push(task);
    saveTasks(tasks);
    res.status(201).send(task);
});

router.put('/tasks/:id', (req, res) => {
    let tasks = loadTasks();
    if (!req.body.name) { 
        return res.status(400).send('Task name is required');
    }
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body };
        saveTasks(tasks);
        res.send(tasks[index]);
    } else {
        res.status(404).send('Task not found');
    }
});

router.delete('/tasks/:id', (req, res) => {
    let tasks = loadTasks();
    const filteredTasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    if (tasks.length !== filteredTasks.length) {
      saveTasks(filteredTasks);
      res.send(`Task ${req.params.id} deleted`);
    } else {
      res.status(404).send('Task not found');
    }
  });

  module.exports = router ;