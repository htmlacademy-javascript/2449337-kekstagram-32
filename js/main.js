import { getData, sendData} from './work-server.js';
import {setOnFormSubmit, closeButtonClickHandler} from './work-form.js';

import {generateTemplates} from './paint-photos.js';
import {showAlert, debounce} from './utils.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {init as initFilter, getFilteredPictures} from './filter.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeButtonClickHandler();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(generateTemplates);
  initFilter(data, debouncedRenderGallery);
  generateTemplates(getFilteredPictures());
} catch {
  showAlert();
}
