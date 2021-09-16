// array of objects
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// 1.map()
const  brands = products.map( products => products.brand);
// console.log(brands);

// 2.forEach()

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.brand));
products.forEach(product => {
    //multiline 
});

//3. filter()
const cheapProducts = products.filter(product => product.price <= 5000);
// console.log(cheapProducts);

const specificName = products.filter(product => product.name.includes('a'));
// console.log(specificName);

// 4. find()

const special = products.find( product => product.name.includes('a'));
console.log(special);