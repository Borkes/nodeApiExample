const fs = require('fs')
const source = fs.readFileSync('./test.js');

fs.writeFileSync('test_copy.js', source);
