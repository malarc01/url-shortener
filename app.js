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



app.post('/url', (req, res) => {
  const url = req.body.url
  urlShortener.short(url, (err, shortUrl) => {
    res.send(shortUrl)
  })
})

app.listen(port, () => console.log(`url-short listening on port ${port}!`));

























