// =========== Task 1

// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }

// ============== Task 2
// Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

// const obj = {
//     name: 'Igor',
//     car: 'Mercedes',
//     carColor: 'black',
// };

// ============== Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника

// const findBestEmployee = function (employees) {
//     // твой код
//     let bestResult = 0;
//     let bestEmployee = '';
//     const entries = Object.entries(employees);

//     for (const [key, value] of entries) {
//         if (value > bestResult) {
//             bestResult = value;
//             bestEmployee = key;
//         }
//     }
//     return bestEmployee;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// ============== Task 4

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// ============== Task 5

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

//  ========== Task 7

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
// deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

//  ================= Solution Nikita

// deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

// withdraw(amount) {
//     if (amount > this.balance) {
//       return `Снятие  ${amount} невозможно,недостаточно средство`;
//     }
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     return (this.balance -= amount);
//   },

//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return `id ${id} отсутствует`;
//   },

//    getTransactionTotal(type) {
//     let total = 0;
//     for (let transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(10000);
// console.log(account);
// account.withdraw(3000);
// console.log(account);
// account.deposit(5000);
// account.withdraw(1000);
// console.log(account.getTransactionTotal("withdraw"));
// console.log(account.getTransactionDetails(2));

//  ====== Task 8

// Дано: массив, содержащий хеши имен
// Возврат: строка, отформатированная как список имен, разделенных запятыми,
// за исключением последних двух имен, которые должны быть разделены амперсандом.

// function list(array) {
//     // пиши тут свой код
// }

// ТЕСТЫ

// console.log(
//   list([
//     { name: "Bart" },
//     { name: "Lisa" },
//     { name: "Maggie" },
//     { name: "Petya" },
//   ])
// ); // returns 'Bart, Lisa, Maggie & Petya'

// console.log(list([{ name: "Bart" }, { name: "Lisa" }])); // returns 'Bart & Lisa'
// console.log(list([{ name: "Bart" }])); // returns 'Bart'
// console.log(list([])); // ''

//  Solution Дима 1

// function list(arr) {
//     return arr.reduce(
//         (acc, { name }, ind, arr) =>
//             ind > 0 && ind !== arr.length - 1
//                 ? acc + ', ' + name
//                 : ind > 0 && ind === arr.length - 1
//                 ? acc + ' & ' + name
//                 : acc + name,
//         '',
//     );
// }

//  Solution Дима 2

// function list(arr) {
//     return arr
//         .map(el => el.name)
//         .join(', ')
//         .replace(/,(?=[^,]*$)/, ' &');
// }

//  Solution Саша
// Дано: массив, содержащий хеши имен
// Возврат: строка, отформатированная как список имен, разделенных запятыми,
// за исключением последних двух имен, которые должны быть разделены амперсандом.
// function list(array) {
//   let list = '';
//   const arrNames = array.map(({ name }) => name);
//   const arr = [];
//   for (let i = 0; i < arrNames.length; i += 1) {
//     if (i === arrNames.length - 1 && arrNames.length > 1) {
//       arr.push(`& ${arrNames[i]}`);
//       list += `${arr[i]}`;
//     } else if (arrNames.length - 2 === i) {
//       arr.push(arrNames[i]);
//       list += `${arr[i]} `;
//     } else if (arrNames.length === 1) {
//       arr.push(arrNames[i]);
//       list += `${arr[i]}`;
//     } else {
//       arr.push(arrNames[i]);
//       list += `${arr[i]}, `;
//     }
//   }
//   return list;
// }
// const list = arr =>
//   arr
//     .map(el => el.name)
//     .join(', ')
//     .replace(/,(?=[^,]*$)/, ' &');
// function list(arr) {
//   return arr.reduce(
//     (acc, { name }, ind, arr) =>
//       ind > 0 && ind !== arr.length - 1
//         ? acc + ', ' + name
//         : ind > 0 && ind === arr.length - 1
//         ? acc + ' & ' + name
//         : acc + name,
//     '',
//   );
// }
// console.log(
//   list([
//     { name: 'Bart' },
//     { name: 'Lisa' },
//     { name: 'Maggie' },
//     { name: 'Petya' },
//   ]),
// ); // returns 'Bart, Lisa, Maggie & Petya'
// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }])); // returns 'Bart & Lisa'
// console.log(list([{ name: 'Bart' }])); // returns 'Bart'
// console.log(list([])); // ''
