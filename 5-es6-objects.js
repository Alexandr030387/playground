const name = 'Alex';
const userAge = 35;
const location = 'Bucurest';

const user = {
    name,
    age: userAge,
    location: 'Calgary'
}

console.log(user);

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.3
}

const {label:productLabel, stock, rating = 5} = product

console.log(productLabel)
console.log(stock)
console.log(rating)