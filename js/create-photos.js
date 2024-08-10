import {getRandomInteger} from './random.js';
import {getRandomArrayElement} from './random.js';


const PHOTO_MIN_LIKE = 15;
const PHOTO_MAX_LIKE = 200;

const PHOTO_MAX_COMMENT = 30;

const photoDescription = [
  'Самое интерестное за этот день',
  'Продолжение моего блога',
  'Мой выходной',
  'Коротко о том как я провожу лето',
  'Идеальный кадр!'
];


const commentMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commentName = [
  'Ирина',
  'Андрей',
  'Наташа',
  'Никита',
  'Артём',
  'Анастасия',
  'Илья',
  'Полина'
];

const createIdGenerator = () => {
  let numberId = 0;
  return () => {
    numberId += 1;
    return numberId;
  };
};

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(commentMessage)
);

const createIdComments = createIdGenerator();
const createComment = () => ({
  id: createIdComments(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(commentName)
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(photoDescription),
  likes: getRandomInteger(PHOTO_MIN_LIKE, PHOTO_MAX_LIKE),
  comments: Array.from(
    {length: getRandomInteger(0, PHOTO_MAX_COMMENT)},
    createComment
  ),
});

const getPhoto = () => Array.from(
  {length: 25},
  (_, index) => createPhoto(index + 1)
);

export {getPhoto};
