// ============== TASK 10 ===============
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// ============ SOLUTION 210 =============
const apartment = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys);
console.log(values);

for (const key of keys) {
    console.log(key);
    console.log(apartment[key]);
}

// ============== TASK 11 ===============

// ============ SOLUTION 11 =============

// ============== TASK 12 ===============

// ============ SOLUTION 12 =============

// ============== TASK 13 ===============

// ============ SOLUTION 13 =============

// ============== TASK 14 ===============

// ============ SOLUTION 14 =============
