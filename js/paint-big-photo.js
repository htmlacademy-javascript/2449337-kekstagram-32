import {getPhoto} from './create-photos.js';

// Нахождение нужного элемента
const bigPhoto = document.querySelector('.big-picture');

// Функция которая создает комменты
const createCommentsForBigPhoto = (commentsInformation) => {
  const commentListElement = bigPhoto.querySelector('.social__comments');
  commentListElement.innerHTML = '';

  const commentBigPhoto = document.querySelector('#comment').textContent.querySelector('.social__comment');
  const commentBigPhotoClone = commentBigPhoto.cloneNode(true);
  const commentBigPhotoImage = commentBigPhotoClone.querySelector('.social__picture');
  const commentBigPhotoMessage = commentBigPhotoClone.querySelector('.social__text');

  commentBigPhotoImage.src = commentsInformation.avatar;
  commentBigPhotoImage.alt = commentsInformation.name;
  commentBigPhotoMessage.textContent = commentsInformation.message;

  const fragment = document.createDocumentFragment();

  commentsInformation.forEach(() => {
    const comment = commentBigPhotoClone;
    fragment.append(comment);
  });

  commentListElement.append(fragment);
};

// Функция которая удаляет класс hidden и тд
const displayBigPhoto = (information) => {
  bigPhoto.classList.remove('hidden');

  // Задание значений
  const imageBigPhoto = bigPhoto.querySelector('.big-picture__img img');
  // Строка выше должна будет найти то фото в диве
  const likesBigPhoto = bigPhoto.querySelector('.likes-count');
  const descriptionBigPhoto = bigPhoto.querySelector('.social__caption');
  const visibleCommentsBigPhoto = bigPhoto.querySelector('.social__comment-shown-count');
  const allCommentsBigPhoto = bigPhoto.querySelector('.social__comment-total-count');
  // const commentsBigPhoto = bigPhoto.querySelector('.social__comments');

  imageBigPhoto.src = information.url;
  likesBigPhoto.textContent = information.likes;
  descriptionBigPhoto.textContent = information.description;
  allCommentsBigPhoto.textContent = information.comments.length;
  // commentsBigPhoto.textContent = information.comments;
  // Не уверена что строчка ниже сработает
  createCommentsForBigPhoto(information.comments);

  //   const socialCommentCount = bigPhoto.querySelector('.social__comment-count');
  //   const commentsLoader = bigPhoto.querySelector('.comments-loader');
  //   socialCommentCount.classList.add('hidden');
  //   commentsLoader.classList.add('hidden');

  return bigPhoto;
};

const socialCommentCount = bigPhoto.querySelector('.social__comment-count');
const commentsLoader = bigPhoto.querySelector('.comments-loader');
socialCommentCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

// Переменные для функций и обработчиков ниже

const closeButton = bigPhoto.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    body.classList.remove('modal-open');
  }
};

// Функции по открытию и закрытию окна

const openBigPhoto = (pictureObj) => {
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  displayBigPhoto(pictureObj);
};

const closeBigPhoto = () => {
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

// Обработчики событий
const startListener = (data) => {

  const pictures = document.querySelectorAll('.picture');

  pictures.forEach((picture) => {
    picture.addEventListener('click', () => {

      const id = parseInt(picture.dataset.id, 10); // Получаем id из data-id на кликнутой ссылке

      const pictureObj = data.find((obj) => obj.id === id); // По этому id ищем в массиве нужный объект фото

      openBigPhoto(pictureObj); // Дальше передаём уже только его

      closeButton.addEventListener('click', () => {
        closeBigPhoto();
      }
      );
    });
  });
};


export {displayBigPhoto,startListener};
