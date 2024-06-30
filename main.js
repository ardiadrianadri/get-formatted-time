const getFormattedTime = require('./getFormattedTime');

const format = process.argv[2];
console.log(getFormattedTime(format));