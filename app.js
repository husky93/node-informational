const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/contact-me.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
