const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(x => x.length);
// console.log(fLengths);

const products = [
  {name: 'water bottle', price: 50, color: 'yellow'},
  {name: 'mobile phone', price: 50, color: 'yellow'},
  {name: 'smart watch', price: 500, color: 'red'}
]

const productNames = products.map(p => p.name);
console.log(productNames);
