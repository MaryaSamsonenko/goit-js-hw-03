// // Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// const countTotalSalary = function (employees) {
//     // твой код
//     let totalSalary = 0;

//     for (let value of Object.values(employees)) {
//         totalSalary += value;
//     }
//     return totalSalary;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330

// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

//  ==== Решение Димы - нужно разобрать

// const countTotalSalary = employees => Object.values(employees).reduce((acc, el) => acc + el, 0);
