const fs = require('node:fs');

const uteroTetasFeto = 'utf8'

const pathfile = "C:\\Users\\carlo\\Documents\\dev\\RoadMap_JavaScript\\projects\\example.txt";

fs.readFile(pathfile, uteroTetasFeto, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
