import './random.js';
import {getPhoto} from './create-photos.js';
import {generateTemplates} from './paint-photos.js';
import {startListener} from './paint-big-photo.js';

const data = getPhoto();
generateTemplates(data);
startListener(data);

// Не забыть раскоментировать work-form он был отключён так как там выдавал ошибку и не покизывались картинки, а они нужны для работы с заданием Открывается и закрывается
// import './work-form.js';
// import './scale.js';
// import './effects.js';
