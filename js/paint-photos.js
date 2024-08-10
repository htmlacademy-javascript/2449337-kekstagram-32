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
  });

  containerForPhotos.append(fragment);
};

// Это я переписала с лайва (время 53:35), там это находилось в файле gallery.js этот файл более или менее похож на него поэтому это сдесь. Я не доконца понимаю нужно это или нет поэтому это закоментировано.
/*
import { displayBigPhoto } from './paint-big-photo';

let pictures = [];

const onContainerClick = (evt) => {
  const thumbnale = evt.target.closest('[data-trumbnail-id');
  if (!thumbnale) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +thumbnale.dataset.thumbnaleId
  );
  displayBigPhoto(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  generateTemplates(pictures, containerForPhotos);
  containerForPhotos.addEventListener('click', onContainerClick);
};
*/
export {generateTemplates /*, renderGallery*/};
