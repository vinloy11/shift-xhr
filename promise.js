const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos/';

function sendRequest(url, method, body= null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';
    method === 'POST' && xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

    xhr.addEventListener('load', e => {
      if (xhr.status <= 400) {
        resolve(xhr.response);
        return;
      }
      reject('server error')
    });

    xhr.addEventListener('error', e => {
      // console.log(xhr)
      reject('ERROR: network error')
    });

    xhr.send(JSON.stringify(body))
  })
}

const body = {
  title: 'ׁתוסעü הוהא',
  userId: 22,
  completed: false
}

sendRequest(endpoint, 'GET', null)
  .then(data => {
    console.log(data);
    return sendRequest(todosEndpoint, 'POST', body);
  })
  .then(response => console.log(response))
  .catch(error => console.error(error))


