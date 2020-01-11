// importing the necessary requires
const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

// storing the api keys
const API_TOKEN = '5fd073409dd7239a9d071e7b4f292744c1abe267';
let image_path = '../test-images/cars.jpg';
let body = new FormData();
body.append('upload', fs.createReadStream(image_path));

fetch('https://api.platerecognizer.com/v1/plate-reader/', {
  method: 'POST',
  headers: {
    Authorization: `Token ${API_TOKEN}`
  },
  body: body
})
  .then(res => res.json())
  .then(results => {
    var plateNumber = results.results[0].plate;
    console.log(`The PlateNumber of the Car is ${plateNumber.toUpperCase()}`);
  })
  .catch(err => {
    console.log(err);
  });
