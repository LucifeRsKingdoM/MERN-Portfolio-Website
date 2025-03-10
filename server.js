const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL Database');
    }
});

// Register new admin
app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const sql = 'INSERT INTO Users (email, password) VALUES (?, ?)';
    db.query(sql, [email, password], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Admin login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM Users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length > 0) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// Add a new project
app.post('/projects', (req, res) => {
    const { title, description, image, github_link } = req.body;
    const sql = 'INSERT INTO Projects (title, description, image, github_link) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, image, github_link], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Project added successfully' });
    });
});

// Get all projects
app.get('/projects', (req, res) => {
    db.query('SELECT * FROM Projects', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Contact form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO ContactMessages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Message sent successfully' });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
