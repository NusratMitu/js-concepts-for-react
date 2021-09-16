// 1. array destructuring
const numbers = [42, 65];
// const [x, y] = [42, 65]
const [x, y] = numbers;

const boxify = (num1, num2) =>{
    const nums = [num1, num2];
    return nums;
}
// const [first,second] = [35,85];
const [first,second] = boxify(35,85);
console.log(boxify(35,85));

const student = {
    name: 'Sakib',
    age: 22,
    courses: ['js', 'c', 'algo']
}
const [firstCourse, secondCourse] = student.courses;

// object destructuring
const { name, age } = { name: 'rakib', age: 14 };
const { name, age } = { id: 12, name: 'rakib', salary: 3400, age: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}
const {ide,machine} =employee;
const [language1] = employee.languages;
const {height} = employee.specification;
const {brand} = employee?.specification?.watch;
