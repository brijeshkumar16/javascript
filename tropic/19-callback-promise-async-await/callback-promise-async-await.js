// Callback Function
// Callbacks are a way to handle asynchronous operations in JavaScript.

function fetchData(callback) {
  setTimeout(() => {
    const data = 'This is some data from an API.';
    callback(data);
  }, 1000);
}

function processCallbackData(data) {
  console.log('Callback Data:', data);
}

fetchData(processCallbackData);

// Promises
// Promises provide a more structured way to work with asynchronous operations.

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'This is some data from a Promise.';
      resolve(data);
    }, 1000);
  });
}

fetchDataPromise()
  .then((data) => {
    console.log('Promise Data:', data);
  })
  .catch((error) => {
    console.error('Promise Error:', error);
  });

// Async/Await
// Async/Await is a more modern and readable way to work with Promises.

async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log('Async/Await Data:', data);
  } catch (error) {
    console.error('Async/Await Error:', error);
  }
}

fetchDataAsync();
