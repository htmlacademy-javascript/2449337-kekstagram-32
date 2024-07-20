import {getPhoto} from './create-photos.js';

// Нахождение нужного элемента
const bigPhoto = document.querySelector('.big-picture');
const bigPhotoClone = bigPhoto.cloneNode(true);

// Функция которая удаляет класс hidden и тд
const displayBigPhoto = (information) => {
  bigPhotoClone.classList.remove('hidden');

  // Задание значений
  const srcBigPhoto = bigPhotoClone.querySelector('.big-picture__img');
  const likesBigPhoto = bigPhotoClone.querySelector('.likes-count');
  const descriptionBigPhoto = bigPhotoClone.querySelector('.social__caption');
  const visibleCommentsBigPhoto = bigPhotoClone.querySelector('.social__comment-shown-count');
  const allCommentsBigPhoto = bigPhotoClone.querySelector('.social__comment-total-countt');
  const commentsBigPhoto = bigPhotoClone.querySelector('social__comments');

  srcBigPhoto.textContent = information.url;
  likesBigPhoto.textContent = information.likes;
  descriptionBigPhoto.textContent = information.description;
  commentsBigPhoto.textContent = information.comments;
  allCommentsBigPhoto.textContent = information.comments.length;

  const socialCommentCount = bigPhotoClone.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');
  const commentsLoader = bigPhotoClone.querySelector('.comments-loader');
  commentsLoader.classList.add('hidden');

  return bigPhotoClone;
};

const pictures = document.querySelectorAll('.picture');
const closeButton = bigPhotoClone.querySelector('big-picture__cancel');
const body = document.querySelector('body');

// Обработчики событий

pictures.addEventListener('click', () => {
  body.classList.add('modal-open');
  return displayBigPhoto(getPhoto());
});

closeButton.addEventListener('click', () => {
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    body.classList.remove('modal-open');
  }
});
