//

// Саша решение

// function formatMessage(message, maxLength) {
//   let result = message.slice(0, maxLength);
//   const finalResult =
//     message.length > maxLength ? `'${result}...'.` : `'${result}'.`;
//   console.log(finalResult);
//   return finalResult;}

// Женя решение

// стрелочная ф-я
// const formatMessage = (message, maxLength) => message.length > maxLength ? message.slice(0, maxLength) + "..." : message;

// тернарный код
// function formatMessage(message, maxLength) {
//  return message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
// }

//  новая задача

// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

//  новая задача

// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
// function getSubstring(string, length) {
//   const substring = ; // Change this line

//   return substring;
// }
// getSubstring('Hello world', 4);
