const fish = {
  id: 58,
  name: 'king',
  price: 9000,
  phone: '0175555554',
  address: 'chandpur',
  dress: 'silver'
};

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;


// shortCut
const {phone, price, dress, id} = fish;

console.log(fish.id);
console.log(phone,price);
console.log(phone);

const company = {
  name:'GP',
  ceo: { id:1, name: 'ajmol', food: 'fuchka'},
  web: { work: 'website developement', employe: 22, framework: 'react'}
}

const {work, framework } = company.web;
const { food } = company.ceo;

console.log(work, framework, food);