## Requesting remote data with Fetch

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

The Fetch API provides a generic definition of ```Request``` and ```Response```
objects (and other things involved with network requests). It also defines
related concepts such as CORS and the HTTP Origin header semantics, supplanting
their separate definitions elsewhere. Fetch returns a ```Promise```, an object
represents the eventual completion (or failure) of an asynchronous operation
and its resulting value.

### Asynchronous functions

Instead of creating a promise chain - ```promise.then(success).catch(error)``` -
you can handle a promise by implementing an ```async``` function. In some sense,
async/await is 'just' syntatic sugar for creating and consuming promises, and
yet it completely transforms how you write your asynchronous code.

The key features of ```async``` functions are:

- ```async``` functions implicitly create and return promises.
- In an ```async``` function, ```await``` consumes promises, marking a point
  where the code will wait asynchronously for the promise to settle.
- While the function is waiting for the promisse to settle, the thread can run
  other code.
- Exceptions are rejections, and rejections are exceptions; returns are
  resolutions, and fulfillments are results (that is, if you ```await``` a
  promise, you see the promise's fulfillment value as the result of the ```await```
  expression).

### Fetch API in action

```javascript
const url = 'https://raw.githubusercontent.com/mrspecht/fetch-api/main/movies.json';

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
};

const getMovies = async () => {
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
```

### Endpoints

- GitHub: https&#8203;://raw.githubusercontent.com/[profile]/[repo]/[branch]/[file]
- GitLab: https&#8203;://gitlab.com/api/v4/projects/[repo_id]/repository/files/[file%2Eextension]/raw

### Useful links

- [Intro to promises](https://web.dev/promises/)
- [What is an API?](https://www.youtube.com/watch?v=s7wmiS2mSXY)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
