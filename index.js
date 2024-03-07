let http = require('http');
let fs = require('fs');
let parser = require('./parser');
let append = require('./append');
console.log(parser);
let app = http.createServer((req, res) => {
  req.on('data', (data) => {
    let parsed = parser(data);
    append(parsed);
  });
  if (req.url === '/completed') {
    res.end('completed');
  }
  if (req.url === '/style.css') {
    let file = fs.readFile('./style.css', 'utf8', (err, data) => {
      if (err) {
        console.log('problem');
        return;
      }
      res.end(data);
    });
  }
  if (req.url === '/form.js') {
    let file = fs.readFile('./form.js', 'utf8', (err, data) => {
      if (err) {
        console.log('problem');
        return;
      }

      res.end(data);
    });
  }
  let file = fs.readFile('./index.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.end('problem');
    }
    res.end(data);
  });
});

app.listen(3000, 'localhost');
