
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
app.use(express.static(path.join(__dirname, 'client/build')));



app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.json({ status: 'success' });
});


const port = process.env.PORT || 3100;
app.listen(port, () => console.log(`Listening on port ${port}.......`));


