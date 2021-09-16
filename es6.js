const numbers = [89, 35, 98, 12];
const student = {
    name: 'Sakib',
    age: 22,
    courses: ['js', 'c', 'algo']
};

// 1. template string
const studentInfo = `${student.name} got ${numbers[2]} in ${student.courses[0]} course`
console.log(studentInfo);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers =[...numbers];
newNumbers.push(15);
newNumbers.push(199);
console.log(newNumbers);
console.log(numbers);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(currentNumbers);