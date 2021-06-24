const fs = require('fs');

module.exports = {
  writeFile: (text) => {
    fs.writeFileSync('./file.txt', text)
    return 'ok'
  },
};
