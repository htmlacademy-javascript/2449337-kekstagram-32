// Нужные переменные
const scaleStep = 25;
const minScale = 25;
const maxScale = 100;
const defaultScale = 100;

const modalElement = document.querySelector('.img-upload');
const smallerButtonElement = modalElement.querySelector('.scale__control--smaller');
const biggerButtonElement = modalElement.querySelector('.scale__control--bigger');
const scaleInputElement = modalElement.querySelector('.scale__control--value');
const imageElement = modalElement.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  scaleImage(
    // Обясните как работает строка ниже, пожалуйста, а именно вот это
    // parseInt(scaleInputElement.value, 10) зачем тут 10 и parseInt
    Math.max(parseInt(scaleInputElement.value, 10) - scaleStep, minScale)
  );
};

const onBiggerButtonClick = () => {
  scaleImage(
    Math.min(parseInt(scaleInputElement.value, 10) + scaleStep, maxScale)
  );
};

const resetScale = () => scaleImage(defaultScale);

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

export { resetScale };
