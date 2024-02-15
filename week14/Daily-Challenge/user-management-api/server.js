const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // For form data
app.use(express.static('public')); // Serve static files

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Helper functions for user data
const loadUserData = () => {
    try {
        return JSON.parse(fs.readFileSync('users.json'));
    } catch (e) {
        return [];
    }
};

const saveUsersData = (users) => {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

// Routes
app.post('/register', async (req, res) => {
    const users = loadUserData();
    const { first_name, last_name, email, username, password } = req.body;
    const existingUser = users.some(user => user.username === username);

    if (existingUser) {
        return res.status(400).send('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ first_name, last_name, email, username, password: hashedPassword });
    saveUsersData(users);

    res.send('Your account is now created!');
});

// Add additional routes as needed

// Ensure users.json is created in the project root with initial content: []
