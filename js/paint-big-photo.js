import {getPhoto} from './create-photos.js';

// Нахождение нужного элемента
const bigPhoto = document.querySelector('.big-picture');
const bigPhotoClone = bigPhoto.cloneNode(true);

// Функция которая создает комменты
const createCommentsForBigPhoto = (commentsInformation) => {
  const commentBigPhoto = document.querySelector('.social__comment');
  const commentBigPhotoClone = commentBigPhoto.cloneNode(true);
  const commentBigPhotoImage = commentBigPhotoClone.querySelector('.social__picture');
  const commentBigPhotoMessage = commentBigPhotoClone.querySelector('.social__text');

  commentBigPhotoImage.src = commentsInformation.avatar;
  commentBigPhotoImage.alt = commentsInformation.name;
  commentBigPhotoMessage.textContent = commentsInformation.message;
};

// Функция которая удаляет класс hidden и тд
const displayBigPhoto = (information) => {
  bigPhotoClone.classList.remove('hidden');

  // Задание значений
  const srcBigPhoto = bigPhotoClone.querySelector('.big-picture__img');
  const likesBigPhoto = bigPhotoClone.querySelector('.likes-count');
  const descriptionBigPhoto = bigPhotoClone.querySelector('.social__caption');
  const visibleCommentsBigPhoto = bigPhotoClone.querySelector('.social__comment-shown-count');
  const allCommentsBigPhoto = bigPhotoClone.querySelector('.social__comment-total-count');
  const commentsBigPhoto = bigPhotoClone.querySelector('social__comments');

  srcBigPhoto.textContent = information.url;
  likesBigPhoto.textContent = information.likes;
  descriptionBigPhoto.textContent = information.description;
  allCommentsBigPhoto.textContent = information.comments.length;
  //  commentsBigPhoto.textContent = information.comments;
  // Не уверена что строчка ниже сработает
  commentsBigPhoto.textContent = createCommentsForBigPhoto(information);

  const socialCommentCount = bigPhotoClone.querySelector('.social__comment-count');
  const commentsLoader = bigPhotoClone.querySelector('.comments-loader');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  return bigPhotoClone;
};

// Переменные для функций и обработчиков ниже

const pictures = document.querySelectorAll('.picture');
const closeButton = bigPhotoClone.querySelector('big-picture__cancel');
const body = document.querySelector('body');
const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    body.classList.remove('modal-open');
  }
};

// Функции по открытию и закрытию окна

const openBigPhoto = () => {
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  return displayBigPhoto(getPhoto());
};

const closeBigPhoto = () => {
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

// Обработчики событий

pictures.addEventListener('click', () => {
  openBigPhoto();
}
);

closeButton.addEventListener('click', () => {
  closeBigPhoto();
}
);

export {displayBigPhoto};
