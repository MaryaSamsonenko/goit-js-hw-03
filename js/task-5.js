// // Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

//  ====== Option 1

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//     // твой код
//     const arrayProp = [];

//     for (const product of products) {
//         if (product[prop]) {
//             arrayProp.push(product[prop]);
//         }
//     }
//     // return `${prop} : ${arrayProp}`;
//     return arrayProp;
// };

//  ====== Option 2

// const getAllPropValues = function (arr, prop) {
//     const arrValues = [];
//     for (const obj of arr) {
//         if (obj.hasOwnProperty(prop)) {
//             arrValues.push(obj[prop]);
//         }
//     }
//     return arrValues;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

//  ====== Option 3

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 0 },
// ];

// const getAllPropValues = (arr, prop) => {
//     const propToFilter = arr.filter(product => product.hasOwnProperty(prop));
//     return propToFilter.map(product => product[prop]);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
