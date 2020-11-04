const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos/';

function sendRequest(url, method, body= null, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.responseType = 'json';
  method === 'POST' && xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

  xhr.addEventListener('load', e => {
    if (xhr.status <= 400) {
      callback(xhr.response)
      return;
    }
    console.error('server error')
  });

  xhr.addEventListener('error', e => {
    console.log(xhr)
    console.error('ERROR: network error')
  });

  xhr.send(JSON.stringify(body))
}

// let citiec = []

sendRequest(endpoint, 'GET', null, function (cities) {
  console.log('Йеес, минус три, йухуу')
  // const cities = cities;
});

const body = {
  title: 'Съесть деда',
  userId: 22,
  completed: false
}

sendRequest(todosEndpoint, 'POST', body, function (response) {
  console.log(response)
})
