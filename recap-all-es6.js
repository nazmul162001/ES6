// 1. template String

const phoneName = 'samsung';
const phonePrice = 30000;

const phoneFeature = {ram:'28GB', camera:50, display: 'super amoled'};

const myPhone = ` I have a ${phoneName} phone. And this price is ${phonePrice} and this phone has a ${phoneFeature.camera} megapixel camera also it has a ${phoneFeature.display} display`;

console.log(myPhone);


// 2. arrow function

  // (a). declare an array with one parameter. will return the number after dividing by 5.
  const sum = totalSum => totalSum % 5;
  // console.log(sum(34));


  // (b). with two parameter .will add two to each number and then multiply the result
  const multiplySum = (num1, num2) => {
  const sumOne = num1 + 2;
  const sumTwo = num2 + 2;
  return sumOne * sumTwo;
};
  // console.log(multiplySum(14, 14));


// (c). three parameter. will multiply all three parameter
const multiplyThree = (x, x1, x2) => x * x1 * x2;
// console.log(multiplyThree(20,20,20));



// 3. map with arrow function
  // declare array of numbers. and then map to get each elements multiplied by 5. must use arrow function 

  const numbersArr = [5, 4, 7, 8, 10, 15];
  const multiplyArr = numbersArr.map(x => x * x);
  // console.log(multiplyArr);



// 4. filter with arrow function
  // declare a numbers of array. get odd numbers by using with arrow function

  const myArr = [30, 85, 65, 75, 85, 60, 90, 100, 37];
  const getOdd = myArr.filter(x => x % 2 != 0);
  // console.log(getOdd);



// 5. find with arrow function 
  // declare an array of objects (Product). use find to get tht object with price 5000.


  const products = [
    {laptop: 'Hp', price: 3000, color: 'red'},
    {laptop: 'Dell', price: 5300, color: 'green'},
    {laptop: 'Toshiba', price: 5000, color: 'yellow'}
  ];
  const getProduct = products.find(x => x.price == 5000);
  // console.log(getProduct);



// 5. array destructuring
  // Your have an object. Now use destructing to creat a simple variable of any property of the object.

  const myObj = {laptop: 'Hp', price: 3000, color: 'red'};
  const {laptop, price, color} = myObj;
  // console.log(price);



// 6. default parameter of function 
  //Just write a function with three parameters. and the last parameter will have a default parameter with value 7. this function will take three parameters and will return the sum of all the three parameters.

  const defaultParameter = (num1, num2, num3 = 15) => num1 + num2 + num3;
  // console.log(defaultParameter(10, 50));