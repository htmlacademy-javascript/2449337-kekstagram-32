const photoMinLike = 15;
const photoMaxLike = 200;

const photoMinId = 1;
const photoMaxId = 25;

const photoMaxComment = 30;

const photoUrl = [
  ulr(photos/1.jpg),
  ulr(photos/2.jpg),
  ulr(photos/3.jpg),
  ulr(photos/4.jpg),
  ulr(photos/5.jpg),
  ulr(photos/6.jpg),
  ulr(photos/7.jpg),
  ulr(photos/8.jpg),
  ulr(photos/9.jpg),
  ulr(photos/10.jpg),
  ulr(photos/11.jpg),
  ulr(photos/12.jpg),
  ulr(photos/13.jpg),
  ulr(photos/14.jpg),
  ulr(photos/15.jpg),
  ulr(photos/16.jpg),
  ulr(photos/17.jpg),
  ulr(photos/18.jpg),
  ulr(photos/19.jpg),
  ulr(photos/20.jpg),
  ulr(photos/21.jpg),
  ulr(photos/22.jpg),
  ulr(photos/23.jpg),
  ulr(photos/24.jpg),
  ulr(photos/25.jpg),
];

const photoDescription = [
 "Самое интерестное за этот день",
 "Продолжение моего блога",
 "Мой выходной",
 "Коротко о том как я провожу лето",
 "Идеальный кадр!"
];

const commentAvatar = [
  ulr(img/avatar-1.svg),
  ulr(img/avatar-2.svg),
  ulr(img/avatar-3.svg),
  ulr(img/avatar-4.svg),
  ulr(img/avatar-5.svg),
  ulr(img/avatar-6.svg)
];

const commentMessage = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const commentName = [
  "Ирина",
  "Андрей",
  "Наташа",
  "Никита",
  "Артём",
  "Анастасия",
  "Илья",
  "Полина"
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComment = {
   id: getRandomInteger(1, 1000),
   avatar: getRandomInteger(0, commentAvatar.length - 1),
   message: getRandomInteger(0, commentMessage.length - 1) * getRandomInteger(1, 2),
   name: getRandomInteger(0, commentName.length - 1)
  };


for (let i = 1; i < 25; i++) {
  const createPhoto = () => {
    const randomPhotoId = getRandomInteger(photoMinId, photoMaxId);
    const randomPhotoUrl = getRandomInteger(0, photoUrl.length - 1);
    const randomphotoDescription = getRandomInteger(0, photoDescription.length - 1);
    const randomPhotoLike = getRandomInteger(photoMinLike, photoMaxLike);
    const randomCommentsNumber = getRandomInteger(0, photoMaxComment);

    return {
      photo = {
      id: randomPhotoId,
      url: randomPhotoUrl,
      description: randomphotoDescription,
      likes: randomPhotoLike,
      comments: createComment * randomCommentsNumber
      };
    };
  };
};
