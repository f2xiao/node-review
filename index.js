const fs = require('fs');
fs.writeFile('mynewfile3.txt', 'This is my text', (err) => {
  if (err) throw err;
  console.log('Replaced!')
})

