import './random.js';
import {getPhoto} from './create-photos.js';
import {generateTemplates} from './paint-photos.js';
import {startListener} from './paint-big-photo.js';

generateTemplates(getPhoto());
startListener();
