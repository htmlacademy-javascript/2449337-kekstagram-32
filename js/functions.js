// Функия которая измеряет длину строки
const measurementLenght = (string, maxLenght) => string <= maxLenght;


// Функция которая проверяет строку на палиндром (Слово или фраза которые читаются вперёд и назад одинаково. Например: потом или шалаш)

const checkPalindrom = (string) => {
  const normString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = normString.split('').reverse().join('');
  return normString === reverseString;
};

