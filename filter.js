// /* Note
// filter() অ্যারের প্রতিটি উপাদানের মধ্যে যেটা যেটা শর্ত ফুলফিল করবে তাদেরকে নতুন েএকটা অ্যারে তে রেখে সেটাকে রিটার্ন করে। 

// Find আর ফিলটার এর মধ্যে পার্থক্য শুধু একটাই ফিলটার যতগুলো শর্ত ফুলফিল করবে সবগুলো রিটার্ন করবে আর Find শুধু মাত্র প্রথম যে শর্তটা ফুলফিল করবে সেইটা রিটার্ন করবে।

// */


// const numbers = [5, 14, 7, 70, 41, 30, 5, 2, 19];
// const bigNumbers = numbers.filter(number => number > 20);

// // console.log(bigNumbers);

// const products = [
//   {name: 'water bottle', price: 50, color: 'yellow'},
//   {name: 'mobile phone', price: 50, color: 'yellow'},
//   {name: 'smart watch', price: 500, color: 'red'}
// ]
// const highPrice = products.filter(high => high.price > 50);
// // console.log(highPrice);

// // get string 
// const getRedOnly = products.filter(red =>red.color == 'red' );
// console.log(getRedOnly);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'};

const{price} = product;
console.log(price);