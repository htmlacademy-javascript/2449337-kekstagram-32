import './random.js';
import {getPhoto} from './create-photos.js';
import {generateTemplates} from './paint-photos.js';
import {startListener} from './paint-big-photo.js';

const data = getPhoto();
generateTemplates(data);
startListener(data);

import './work-form.js';
import {resetScale} from './scale.js';
resetScale();
