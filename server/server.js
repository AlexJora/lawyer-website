
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST']
}));

app.use(express.json());
// Serve the static files from the React app
const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.get('/ex', (req, res) => {
  res.send('This is an example GET request');
});


app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.json({ status: 'success' });
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is online on port: ${port}.......`));


