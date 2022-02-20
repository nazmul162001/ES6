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

/* Important Note :
Map মুলত ৩ টা কাজ করে। প্রথমে প্রতিটা element কে loop through করবে, তারপর তার জন্য একটা function apply করবে, এবং function এর যে রেজাল্ট গুলো পাবে তা একটা array এর মধ্যে রাখবে। তারপর array টাকে return করে দিবে।

forEach ও একই কাজ। শুধু পার্থক্য একটাই map return করে আর forEach return করে না্
*/