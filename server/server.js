const express = require('express');
const app = express();
const ejs = require('ejs');

app.listen(9000, function() {
  console.log('Running on port 9000')
});

app.get('/', function(req, res) {
  res.sendFile('index.html', {root : '../client/public/'})

})