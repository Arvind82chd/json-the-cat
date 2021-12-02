const request = require('request');

const breedName = process.argv.slice(2);


const breedFetcher = function() {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, resp, body) => {
    console.log(resp.statusCode);
    if (!err && resp.statusCode === 200) {
      const data = JSON.parse(body);
      if (data[0]) {
        console.log(data[0].description);
      } else console.log('Breed Name not found');

    } else console.log(resp.statusCode, err);
  });
};

breedFetcher();