// Функия которая измеряет длину строки
const measurementLength = (string, maxLength) => string <= maxLength;

// Функция которая проверяет строку на палиндром (Слово или фраза которые читаются вперёд и назад одинаково. Например: потом или шалаш)

const checkPalindrom = (string) => {
  const normString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = normString.split('').reverse().join('');
  return normString === reverseString;
};

// Функция которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

const fromHoursToMinuts = (time) => {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
};

// console.log(fromHoursToMinuts('8:00'));

/*
const countTime = (beginDay, finishDay, beginMeet, timeMeet) => {
  beginingDay = fromHoursToMinuts(beginDay);
  finishedDay = fromHoursToMinuts(finishDay);
  beginingMeet = fromHoursToMinuts(beginMeet);
  if (beginingDay <= beginingMeet) {
    return beginingMeet + timeMeet <= finishedDay;
  }
};
*/

const countTime = (beginDay, finishDay, beginMeet, timeMeet) => {
  beginingDay = fromHoursToMinuts(beginDay);
  finishedDay = fromHoursToMinuts(finishDay);
  beginingMeet = fromHoursToMinuts(beginMeet);
  return beginingDay <= beginingMeet && finishedDay >= (beginingMeet + timeMeet);
};

// console.log(countTime('8:00', '20:00', '10:00', 240));
