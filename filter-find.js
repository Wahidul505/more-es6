const products = [
  { name: 'calculator', price: 700, color: 'black', body: 'plastic' },
  { name: 'mobile phone', price: 18000, color: 'darksilver', body: 'metal' },
  { name: 'key board', price: 600, color: 'black', body: 'semi plastic' },
  { name: 'tooth brush', price: 40, color: 'pink', body: 'plastic' },
  { name: 'mouse', price: 200, color: 'black', body: 'hard plastic' },
  { name: 'Dell Laptop', price: 55000, color: 'darkgray', body: 'metal' },
  { name: 't-shirt', price: 600, color: 'black', body: 'cotton' },
  { name: 'table', price: 2000, color: 'darkred', body: 'wood' }
]

// filter()
const moreThan1K = products.filter(product => product.price > 1000);
console.log(moreThan1K);
const blackProducts = products.filter(product => product.color == 'black');
console.log(blackProducts);
const plasticProducts = products.filter(prod => prod.body.includes('plastic'));
console.log(plasticProducts);
const darkProducts = products.filter(prod => prod.color.includes('dark'));
console.log(darkProducts);

// find()
const pinkProduct = products.find(product => product.color == 'pink');
console.log(pinkProduct);
const dellLaptop = products.find(product => product.name.toLowerCase() == 'dell laptop');
console.log(dellLaptop);