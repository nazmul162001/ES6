const numbers = [4, 6, 8, 10];
// const output = []

// old function 
// function doubleOld(number){
//   return number * 2;
// }
// arrow function 
const doubleIt = number => number * 2;

// for (const number of numbers) {
//   const result = doubleIt(number);
//   output.push(result);
// }

  //1 loop through each element
  //2. for each element call the provided function
  //3. result for each element will be stored in an array

// map 
// const output = numbers.map(doubleIt);
// another way 
// const output = numbers.map(number => number * 2);
// another way 
const output = numbers.map(x => x * 2);
// console.log(output);

// squire 
const squares = numbers.map(x => x * x);
console.log(squares);



/* Important Note :
Map মুলত ৩ টা কাজ করে। প্রথমে প্রতিটা element কে loop through করবে, তারপর তার জন্য একটা function apply করবে, এবং function এর যে রেজাল্ট গুলো পাবে তা একটা array এর মধ্যে রাখবে। তারপর array টাকে return করে দিবে।

forEach ও একই কাজ। শুধু পার্থক্য একটাই map return করে আর forEach return করে না্
*/