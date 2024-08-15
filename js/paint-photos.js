import { startListener } from './paint-big-photo.js';

// Нахождение нужного шаблона и контейнера для добавления фото
const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
const containerForPhotos = document.querySelector('.pictures');

// Функция которая создает фото по шаблону
const createPhotoByTemplate = (picture) => {
  const templateClone = templatePhoto.cloneNode(true);

  const commentsPhoto = templateClone.querySelector('.picture__comments');
  const likesPhoto = templateClone.querySelector('.picture__likes');
  const imagePhoto = templateClone.querySelector('.picture__img');

  commentsPhoto.textContent = picture.comments.length;
  likesPhoto.textContent = picture.likes;
  imagePhoto.alt = picture.description;
  imagePhoto.src = picture.url;

  templateClone.dataset.id = picture.id;


  return templateClone;
};

// Функция которая добавляет карточки в список
const generateTemplates = (pictures) => {
  containerForPhotos.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const createFragment = createPhotoByTemplate(picture);
    fragment.append(createFragment);
    startListener(createFragment, pictures);
  });

  containerForPhotos.append(fragment);
};

export {generateTemplates};
