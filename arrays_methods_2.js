/*
numeric sort
compare function
sorting of objects by string and numeric properties
*/

let a = [43, 54, 314, 65, 2, 4];

/*
function(a,b) is the compare function 
In the case of return a-b if result is negative a is sorted before b and vice versa
*/

//min:
a.sort(function (a, b) {
  return b - a; //descending
});
console.log(a);
console.log('Minimum:', a[a.length - 1]);

//max:
a.sort(function (a, b) {
  return a - b; //ascending
});
console.log('Maximum:', a[a.length - 1]);

//sorting an object:
let person = [
  {Name: 'Alok', age: 21},
  {Name: 'Ram', age: 10},
  {Name: 'Ashim', age: 16},
  {Name: 'Pratik', age: 25},
];

//sorting string properties alphabetically i.e. Name
console.log('Sort alphabetically');
person.sort(function (a, b) {
  let x = a.Name.toLowerCase();
  let y = b.Name.toLowerCase();
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
});
console.log(person);

//sorting by numeric properties i.e. age
console.log('Sort by age property of each individual');
person.sort(function (a, b) {
  return a.age - b.age;
});
console.log(person);
