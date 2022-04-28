// Requesting remote data with Fetch

const url = 'https://movies.andrespecht.dev';

const options = {
  method: 'GET',
  mode: 'cors'
};

async function getMovies() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`${response.statusText} (${response.status})`);
    }
    // Parsing the reponse as JSON
    const data = await response.json();
    // Printing the movies
    console.table(data.results);
  } catch(error) {
    console.log(error);
  }
};

getMovies();