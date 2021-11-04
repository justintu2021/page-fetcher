const args = process.argv.slice(2) /// command line parameter : take URL and a local file path as a
const request = require('request');


request(`${args[0]}`, (error, response, body) => {

  const fs = require('fs');
  fs.writeFile(`${args[1]}`, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('file written successfully');

    fs.readFile(`${args[1]}`, (err, data) => {
      console.log(`${data.byteLength} bytes`);
    });
  });
}); 


