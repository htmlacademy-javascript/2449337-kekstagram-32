// Не знаю как правильно экспортировать sendData, ведь в export нельзя написать route.SEND_DATA. Я попыталась задать route.SEND_DATA в переменную и экспортировать её, но всё равно ошибка. Не доконца понимаю функция load

const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(err.message);
    });

const getData = () => load(Route.GET_DATA);
const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);

export {getData, sendData};
