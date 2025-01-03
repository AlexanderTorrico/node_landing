const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.redirect('/landing.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});