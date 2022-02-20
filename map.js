// recaping some old looping system to learn array map 
const doubleIt = (num) => num * 2;
const oldArray = [5, 7, 2, 9, 4, 12, 10];
const newArray = [];
for (const element of oldArray) {
  const newElement = doubleIt(element);
  newArray.push(newElement);
}
// console.log(newArray);

// new system using array map
const newArray2 = oldArray.map(doubleIt);
console.log(newArray2);
const newArray3 = oldArray.map(num => num * num);
console.log(newArray3);
// another array 
const names = ['wahid', 'moshu', 'simra', 'safir', 'sahil'];
const newNames = names.map(first => `${first} cool`);
console.log(newNames);
// another 
function adding(last) {
  return `cool ${last}`;
}
const newNames2 = names.map(adding);
console.log(newNames2);