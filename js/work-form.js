import {resetScale} from './scale.js';
import {
  init as initEffect,
  reset as resetEffect
} from './effects.js';

// Переменные для настройки хештегов
const maxHashtagCount = 5;
const valudSimvols = /^#[a-zа-яё0-9]{1,19}$/i;
const errorText = {
  invalidCount: `Максисум ${maxHashtagCount} xeштегов`,
  notUnique: 'Хештеги должны быть уникальными',
  invalidPattern: 'Неправильный хештег'
};

// Остальные переменные

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');
const hastagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffect();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hastagField ||
  document.activeElement === commentField;

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => valudSimvols.test(tag));
const hasValidCount = (value) => normalizeTags(value).length <= maxHashtagCount;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCloseButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

// Функция которая отменяет действие по умолчанию (отправление) и проводит валидацию
const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

// Проверки правильности хештегов
pristine.addValidator(
  hastagField,
  hasValidCount,
  errorText.invalidCount,
  3,
  true
);

pristine.addValidator(
  hastagField,
  hasUniqueTags,
  errorText.notUnique,
  2,
  true
);

pristine.addValidator(
  hastagField,
  hasValidTags,
  errorText.invalidPattern,
  1,
  true
);

fileField.addEventListener('change', onFileInputChange);
closeButton.addEventListener('click', onCloseButtonClick);
form.addEventListener('submit', onFormSubmit);
initEffect();
