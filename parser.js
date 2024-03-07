function parser(arg) {
  let obj = {};
  let split = arg.toString('utf8').split('&');
  split.forEach((e) => {
    let [key, value] = e.split('=');
    if (key === 'time') {
      value = value.replace('%', ':');
      value = value.replace(/\d[A]/, '');
    }
    if (value === 'on') {
      value = true;
    }
    obj[key] = value;
  });

  return obj;
}

module.exports = parser;
