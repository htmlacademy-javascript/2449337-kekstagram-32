// Функия которая измеряет длину строки
const measurementLeight = (string, maxLenght) => {
  string <= maxLenght;
};

// Функция которая проверяет строку на палиндром (Слово или фраза которые читаются вперёд и назад одинаково. Например: потом или шалаш)

const checkPalindrom = (string) => {
  let normString = string.replaceAll(' ', ''), string.toLowerCase();
  let reverseString = string.replaceAll(' ', ''), string.toLowerCase(), string.reverse()
  return normString === reverseString;
};
