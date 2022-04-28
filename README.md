## Fetch API

The Fetch API provides a generic definition of ```Request``` and ```Response```
objects (and other things involved with network requests). It also defines
related concepts such as CORS and the HTTP Origin header semantics, supplanting
their separate definitions elsewhere. Fetch returns a ```Promise```, an object
represents the eventual completion (or failure) of an asynchronous operation
and its resulting value.

### Asynchronous functions

The magic of ```async``` functions is that we can write asynchronous code that
looks like synchronous code. It's still asynchronous code but instead of
results and errors landing inside callback functions, errors are thrown
naturally as exceptions and results naturally land on the next line of code.

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

The simplest use of ```fetch()``` takes one argument - the path to the resource
you want to fetch - and does not directly return the JSON response body but
instead returns a ```Promise``` that resolves with a ```Response``` object.

The ```Response``` object, in turn, does not directly contain the actual JSON
response body but is instead a representation of the entire HTTP response. So,
to extract the JSON body content from the ```Response``` object, we use the
```json()``` method, which returns a second promise that resolves with the
result of parsing the response body text as JSON.

```javascript
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
```

### CORS

Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running
on a browser client to interact with resources from a different origin. This is
useful because, thanks to the same-origin policy followed by ```fetch```,
JavaScript can only make calls to URLs that live on the same origin as the
location where the script is running. For example, if a JavaScript app wishes
to make an AJAX call to an API running on a different domain, it would be
blocked from doing so thanks to the same-origin policy.

### References

- [JavaScript cookbook](https://www.oreilly.com/library/view/javascript-cookbook-3rd/9781492055747/)
- [JavaScript: the new toys](https://www.wiley.com/en-us/JavaScript:+The+New+Toys-p-9781119367963)
- [Professional JavaScript for web developers](https://www.wiley.com/en-us/Professional+JavaScript+for+Web+Developers%2C+4th+Edition-p-9781119366447)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
