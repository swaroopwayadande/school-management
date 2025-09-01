const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // or your username
  password: '9850',// your real password
  database: 'schools',  // your database name
});


// Endpoint to add a school (no image field required)
app.post('/schools', (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  db.execute(
    'INSERT INTO schools (name, address, city, state, contact, email_id) VALUES (?, ?, ?, ?, ?, ?)',
    [name, address, city, state, contact, email_id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
});

// Endpoint to list all schools
app.get('/schools', (req, res) => {
  db.query('SELECT * FROM schools', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Start server
app.listen(5000, () => console.log('Backend running on port 5000'));
