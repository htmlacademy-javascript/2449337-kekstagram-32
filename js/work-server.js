// Не знаю как правильно экспортировать sendData, ведь в export нельзя написать route.SEND_DATA. Я попыталась задать route.SEND_DATA в переменную и экспортировать её, но всё равно ошибка. Не доконца понимаю функция load

const BASE_URL = 'https://32.javascript.pages.academy/kekstagram';
const route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const method = {
  GET: 'GET',
  POST: 'POST'
};

const load = (route, method = method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
.then((response) => {
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  return response.json();
})
.catch((err) => {
  throw new Error(err.message)
});

const getData = () => load(route.SEND_DATA, method.POST, body);

export {getData, sendData};
