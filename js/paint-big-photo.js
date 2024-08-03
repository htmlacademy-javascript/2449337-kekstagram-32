import {getPhoto} from './create-photos.js';

// Нахождение нужного элемента
const bigPhoto = document.querySelector('.big-picture');

// Переменные для показа части комментариев
const commentsPerPorotion = 5;
const visibleCommentsBigPhoto = bigPhoto.querySelector('.social__comment-shown-count');
const allCommentsBigPhoto = bigPhoto.querySelector('.social__comment-total-count');
const socialCommentCount = bigPhoto.querySelector('.social__comment-count');
const commentsLoader = bigPhoto.querySelector('.comments-loader');

let commentsShow = 0;
let comments = [];

// Функция которая создает комменты
const createCommentsForBigPhoto = (commentsInformation) => {
  const commentListElement = bigPhoto.querySelector('.social__comments');
  commentListElement.innerHTML = '';

  const commentBigPhoto = document.querySelector('#comment').content.querySelector('.social__comment');

  commentsShow += commentsPerPorotion;

  if (commentsShow >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShow = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  commentsInformation.forEach((item) => {
    const commentBigPhotoClone = commentBigPhoto.cloneNode(true);
    const commentBigPhotoImage = commentBigPhotoClone.querySelector('.social__picture');
    const commentBigPhotoMessage = commentBigPhotoClone.querySelector('.social__text');

    commentBigPhotoImage.src = item.avatar;
    commentBigPhotoImage.alt = item.name;
    commentBigPhotoMessage.textContent = item.message;

    // const comment = commentBigPhotoClone;
    // fragment.append(comment);
  });

  for (let i = 0; i < commentsShow; i++) {
    const comment = commentBigPhotoClone;
    fragment.append(comment);
  }

  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  visibleCommentsBigPhoto.textContent = commentsShow;

};

// Функция которая удаляет класс hidden и тд
const displayBigPhoto = (information) => {
  // Задание значений
  const imageBigPhoto = bigPhoto.querySelector('.big-picture__img img');
  // Строка выше должна будет найти то фото в диве
  const likesBigPhoto = bigPhoto.querySelector('.likes-count');
  const descriptionBigPhoto = bigPhoto.querySelector('.social__caption');
  // const commentsBigPhoto = bigPhoto.querySelector('.social__comments');

  imageBigPhoto.src = information.url;
  likesBigPhoto.textContent = information.likes;
  descriptionBigPhoto.textContent = information.description;
  allCommentsBigPhoto.textContent = information.comments.length;
  // commentsBigPhoto.textContent = information.comments;
  // Не уверена что строчка ниже сработает
  createCommentsForBigPhoto(information.comments);

  return bigPhoto;
};

// Переменные для функций и обработчиков ниже

const closeButton = bigPhoto.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

// Функции по открытию и закрытию окна

const openBigPhoto = (pictureObj) => {
  body.classList.add('modal-open');

  bigPhoto.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  displayBigPhoto(pictureObj);
};

const closeBigPhoto = () => {
  body.classList.remove('modal-open');

  bigPhoto.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShow = 0;
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    body.classList.remove('modal-open');

    closeBigPhoto();
  }
};

const onCommentsLoaderClick = () => createCommentsForBigPhoto();

// Обработчики событий
const startListener = (data) => {

  const pictures = document.querySelectorAll('.picture');

  pictures.forEach((picture) => {
    picture.addEventListener('click', () => {

      const id = parseInt(picture.dataset.id, 10); // Получаем id из data-id на кликнутой ссылке

      const pictureObj = data.find((obj) => obj.id === id); // По этому id ищем в массиве нужный объект фото

      openBigPhoto(pictureObj); // Дальше передаём уже только его
    });
  });
  comments = data.comments;
  if (comments.length > 0) {
    createCommentsForBigPhoto();
  }
};

closeButton.addEventListener('click', () => {
  closeBigPhoto();
}
);

commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {displayBigPhoto,startListener};
