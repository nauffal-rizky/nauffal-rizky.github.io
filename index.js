const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/tic-tac-toe', (req, res) => {
  res.send(`TIC TAC TOE GAME!!!`);
});

app.listen(port, () => {
  console.log(`NodeJS project | Listening on port ${port}`);
});
