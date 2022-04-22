const url = 'https://raw.githubusercontent.com/mrspecht/fetch-api/main/movies.json';

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  },
  mode: 'cors'
};

async function getMovies() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`${response.statusText} (${response.status})`);
    }
    const data = await response.json();
    console.table(data.results);
  } catch(error) {
    console.log(error);
  }
};

getMovies();