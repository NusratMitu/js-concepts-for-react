// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||

if (fatherName === 'arnold' || season === 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. array declare
// index, 
// length, push, 
const numbers = [89, 35, 98, 12];
// changing value of array element
numbers[0] = 56;
// Access an Array item using the index position
const first = numbers[0];
// indexof()
const second = numbers.indexOf(98); // o/p 2
// includes()
numbers.includes(14);   //return false
numbers.includes(12, 3) //return true
const 
// splice() to add or remove array element

// 4. for loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    confirm.log(number);
}

// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);

// 6. Object
// 3 ways to access property by name 
const student = {
    name: 'Sakib',
    age: 22,
    courses: ['js', 'c', 'algo']
};

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']);// access via property name string 
console.log(student[myVariable]); // access via property name in a variable