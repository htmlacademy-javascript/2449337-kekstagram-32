const effects = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const effactToFilter = {
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
