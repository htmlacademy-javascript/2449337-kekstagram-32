const photoMinLike = 15;
const photoMaxLike = 200;

const photoMaxComment = 30;

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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

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
/*
const messages = [];
for (let i = 0; i <= getRandomInteger(1, 2); i++) {
  messages.push(getRandomInteger(0, commentMessage.length - 1));
}

const comments = [];

for (let i = 0; i <= getRandomInteger(0, photoMaxComment); i++) {
  const createComment = {
    id: createIdGenerator,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: messages,
    name: getRandomInteger(0, commentName.length - 1)
  };
  comments.push(createComment);
}

const allPhotos = [];

for (let i = 1; i <= 25; i++) {
  const randomPhotoId = getRandomInteger(photoMinId, photoMaxId);
  const randomPhotoUrl = `photos/${getRandomInteger(1, 25)}.jpg`;
  const randomphotoDescription = getRandomInteger(0, photoDescription.length - 1);
  const randomPhotoLike = getRandomInteger(photoMinLike, photoMaxLike);
  const createPhoto = {
    id: randomPhotoId,
    url: randomPhotoUrl,
    description: randomphotoDescription,
    likes: randomPhotoLike,
    comments: comments
  };
  allPhotos.push(createPhoto);
}
*/

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
  likes: getRandomInteger(photoMinLike, photoMaxLike),
  comments: Array.from(
    {length: getRandomInteger(0, photoMaxComment)},
    createComment
  ),
});

const getPhoto = () => Array.from(
  {length: 25},
  (_, index) => createPhoto(index + 1)
);

getPhoto();

console.log(getPhoto());
