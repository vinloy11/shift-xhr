const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos/';

async function sendRequest(url, method = 'GET', body= null) {
  const init = {
    method: method
  }
  if (body) init.body = JSON.stringify(body);
  if (method === 'POST') init.headers = { 'Content-Type': 'application/json; charset=UTF-8' };
  return fetch(url, init).then(response => response.json());
}

const body = {
  title: 'Съесть деда',
  userId: 22,
  completed: false
};

async function getCities() {
  try {
    const cities = await sendRequest(endpoint, 'GET')
    sendRequest(todosEndpoint, 'POST', Object.assign(body, { title: cities[0].city }));
  } catch (error) {
    console.error(error);
  }
}

getCities();
