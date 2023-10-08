const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  fs.readFile('productdata.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
