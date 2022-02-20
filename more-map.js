const products = [
  { name: 'calculator', price: 700, color: 'black', body: 'plastic' },
  { name: 'mobile phone', price: 18000, color: 'darksilver', body: 'metal' },
  { name: 'key board', price: 600, color: 'black', body: 'semi plastic' },
  { name: 'tooth brush', price: 40, color: 'pink', body: 'plastic' }
]
const productsName = products.map(product => product.name);
console.log(productsName);
const produtsPrice = products.map(product => product.price);
console.log(produtsPrice);
// for just console the result for each element with out return :
products.map(product => console.log(product.color));
// another way of just console the result for each element with out return 
products.forEach(product => console.log(product.color));