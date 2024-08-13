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
    style: 'grayscale',
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
    style: 'invert',
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
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainerElement = modalElement.querySelector('.img-upload__effect-level');
const effectLevelElement = modalElement.querySelector('.effect-level__value');

let chosenEffect = effects.DEFAULT;
const isDefault = () => chosenEffect === effects.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imageElement.style.filter = null;
    return;
  }

  const {value} = effectLevelElement;
  const {style, unit} = effectToFilter[chosenEffect];
  imageElement.style.filter = `${style}(${value}${unit})`;
};

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
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
    connect: 'lower',
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

const setEffect = (effect) => {
  chosenEffect = effect;
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
