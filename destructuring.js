// object destructuring 
const { type, employeeNumber } = { name: 'Think wide', type: 'Creativity', rating: 8.2, employeeNumber: 39 };
console.log(type);
console.log(type, employeeNumber);
// another example of object destructuring
const elements = {
  mostlyUse: 'laptop', wearing: 't-shirt',
  bottle: { brand: 'fresh', price: 20, quantity: '1L' },
  phone: {
    name: 'nokia', model: 'e71', price: 19000,
    color: { dark: 'silver', light: 'pink', medium: 'green' }
  },
}
const { color, price, name } = elements.phone;
console.log(name, price, color);
const { medium, dark } = elements.phone.color;
console.log(medium, dark);

// Array destructuring 
const [a, b] = [12, 67, 38];
console.log(a, b);
// another 
const arr1 = [34, 7, 16, 62, 11, 83, 48];
const [first, second, third, fourth] = arr1;
console.log(first, third, fourth, second);
// another array destructuring 
const arr2 = ['Wahidul', 'Moshu', 'Morsheda', 'Sarzil'];
const [position1, position2, position3] = arr2;
console.log(position1, position3, position2);