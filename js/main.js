import './random.js';
// import './paint-big-photo.js';
import {getPhoto} from './create-photos.js';
import {generateTemplates} from './paint-photos.js';

generateTemplates(getPhoto());
