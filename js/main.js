// import './random.js';
// import {getPhoto} from './create-photos.js';

import { getData, sendData} from './work-server.js';
import {setOnFormSubmit, hideModal} from './work-form.js';

import {generateTemplates, generateTemplates as renderGallery} from './paint-photos.js';
import {showAlert, debounce} from './utils.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {init as initFilter, getFilteredPictures} from './filter.js';
import {startListener} from './paint-big-photo.js';

// const data = getPhoto();
// generateTemplates(data);
// startListener(data);

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  // console.log(data);
  const debouncedRenderGallery = debounce(renderGallery);
  initFilter(data, debouncedRenderGallery);
  // Возможно какая-то из 3 строк ниже лишняя
  renderGallery(getFilteredPictures());
  generateTemplates(data);
  startListener(data);
} catch {
  showAlert();
}

// import './work-form.js';
// import './scale.js';
// import './effects.js';
