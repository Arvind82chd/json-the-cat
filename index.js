const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, description) => {
  if (!err) {
    console.log(description);
  } else {
    console.log('Error fetch details: ', err);
  }
});