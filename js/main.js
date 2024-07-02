const photoId = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
];

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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createPhoto = () => {
  const randomPhotoId = getRandomInteger(0, photoId.length - 1);
  const randomPhotoUrl = getRandomInteger(0, photoUrl.length - 1);

  return {
    id: randomPhotoId,
    url: randomPhotoUrl
  };
};
