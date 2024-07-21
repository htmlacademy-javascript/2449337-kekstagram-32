import './random.js';
// import './paint-big-photo.js';
import {getPhoto} from './create-photos.js';
import {generateTemplates} from './paint-photos.js';
import {displayBigPhoto} from './paint-big-photo.js';

generateTemplates(getPhoto());
displayBigPhoto(getPhoto());
