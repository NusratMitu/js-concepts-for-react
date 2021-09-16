// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy
let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}

const money = 80;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ternary
let food1 = money > 100? 'biriyani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string conversion
const num1 = 52;
const numStr = num1 + '';
// console.log(numStr)

// string to number
const str = '250';
const strToNum = +str;

isActive = true;
const showUsers = () => console.log('display user');
const hideUsers = () => console.log('hide user');
// isActive ?  showUsers() : hideUsers();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();
// toggle boolean
isActive = !isActive;