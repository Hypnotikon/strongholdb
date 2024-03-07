function x(arg) {
  require('fs').readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      let parsed = JSON.parse(data);
      parsed.push(arg);
      require('fs').writeFileSync('data.json', JSON.stringify(parsed));
    }
  });
}

module.exports = x;
