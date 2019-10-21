// var fs = require('fs') // old style

import fs from 'fs'  // new style

// import * as fs from 'fs';

var output = fs.readFileSync('data.txt')

console.log('output', output)