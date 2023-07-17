const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Configurazione del database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Sostituisci con la tua password del database, se presente
  database: 'my-database', // Sostituisci con il nome del tuo database
});

// Connessione al database MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connesso al database MySQL...');
});

// Middleware per il parsing delle richieste JSON
app.use(bodyParser.json());

// Route per ottenere le informazioni dal database
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM `my-table`'; // Sostituisci con il nome della tua tabella
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// Aggiunta di un nuovo record
app.post('/api/data', (req, res) => {
  const { name, email, age } = req.body;
  const query = 'INSERT INTO `my-table` (name, email, age) VALUES (?, ?, ?)';
  db.query(query, [name, email, age], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// Rimozione di un record
app.delete('/api/data/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM `my-table` WHERE id_user = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// Modifica di un record
app.put('/api/data/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const query = 'UPDATE `my-table` SET name = ?, email = ?, age = ? WHERE id_user = ?';
  db.query(query, [name, email, age, id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// Imposta la cartella statica per la build dell'app React
app.use(express.static(path.join(__dirname, 'client/build')));

// Route principale per servire l'app React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Avvio del server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Express avviato sulla porta ${port}`);
});
