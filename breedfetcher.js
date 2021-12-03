const request = require('request');

const breedName = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    } else if (response.statusCode !== 200) {
      return `Status Code ${response.statusCode} when fetching breed names: ${body}`;
    } else {
      const data = JSON.parse(body);
      console.log();
      if (data[0]) {
        //console.log(data[0].description);
        callback(null, data[0].description);
      } else {
        callback('Breed Name not found', null);
      }
    }
  });

};

module.exports = { fetchBreedDescription };

// const breedFetcher = function() {
  
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, resp, body) => {
//     console.log(resp.statusCode);
// if (!err && resp.statusCode === 200) {
//   const data = JSON.parse(body);
//   if (data[0]) {
//     console.log(data[0].description);
//   } else console.log('Breed Name not found');

// } else console.log(resp.statusCode, err);
//   });
// };

// breedFetcher();