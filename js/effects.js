// В целом тут всё более-менее понятно, но не доконца. Я не совсем понимаю как работает noUiSlider. Есть вопросы на 74, 84 строках
// И как работает вот это effectToFilter[chosenEffect], ведь chosenEffect сначала эффект по умолчанию (65 строка), а потом это объект с эффектами (128 строка), как там должно меняться значение на нужный эффект?

// Данные еффектов
const effects = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const effectToFilter = {
  [effects.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1
  },
  [effects.CHROME]: {
    style: 'grayscare',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1
  },
  [effects.SEPIA]: {
    style: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1
  },
  [effects.MARVIN]: {
    style: 'invern',
    unit: '%',
    min: 0,
    max: 100,
    step: 1
  },
  [effects.PHOBOS]: {
    style: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1
  },
  [effects.HEAT]: {
    style: 'brightness',
    unit: '',
    min: 0,
    max: 3,
    step: 0.1
  }
};

// Нужные переменные
const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const effectsElement = modalElement.querySelector('.effects');
const sliderElement = modalElement.querySelector('.effects-level__slider');
const sliderContainerElemnt = modalElement.querySelector('.img-upload__efffect-level');
const effectLevelElement = modalElement.querySelector('.effect-leve__value');

let chosenEffect = effects.DEFAULT;
const isDefault = () => chosenEffect === effects.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imageElement.style.filter = null;
    return;
  }

  // Почему эти 2 переменные в скобках
  const {value} = effectLevelElement;
  const {style, unit} = effectToFilter[chosenEffect];
  imageElement.style.filter = `${style}(${value}${unit})`;
};

const showSlider = () => {
  sliderContainerElemnt.classList.remove('hidden');
};

// Зачем 2 одинаковые функции
const hideSlider = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

const onSliderUpdate = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

const createSlider = ({min, max, step}) => {
  noUiSlider.create(sliderElement, {
    range: {min, max},
    step,
    start: max,
    connect: 'lover',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value)
    }
  });
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({min, max, step}) => {
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    step,
    start: max
  });
};

const setSlider = () => {
  if (isDefault()) {
    hideSlider();
  } else {
    updateSlider(effectToFilter[chosenEffect]);
    showSlider();
  }
};

const setEffect = () => {
  chosenEffect = effects;
  setSlider();
  setImageStyle();
};

const reset = () => {
  setEffect(effects.DEFAULT);
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};

const init = () => {
  createSlider(effectToFilter[chosenEffect]);
  effectsElement.addEventListener('change', onEffectsChange);
};

export {init, reset};
