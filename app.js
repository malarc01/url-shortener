const express = require('express')
const app = express();
const path = require('path')
const port = 3333
const bodyParser = require('body-parser');
const urlShortener = require('node-url-shortener');

express.json()
express.urlencoded()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})


app.post('/url', function (req, res) {
  const url = req.body.url;

  res.send(url);
});


app.listen(port, () => console.log(`url-short listening on port ${port}!`));

























