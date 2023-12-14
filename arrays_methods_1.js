/*
length()
pop()
push()
shift()
UNSHIFT()
tostring()
concat()
+
slice()
splice()
sort() //alphabetical
reverse()
*/

let Names = ['Alok', null, 'Ashim', 34, true, undefined];
let a = [1, 2, 3, 4, 5];
let arr = [0, 9, 8, 7, 6];
let a1;
console.log(Names);

//length
console.log('length', Names.length);

//pop
console.log(Names.pop());
console.log(Names);

//push
Names.push('Hi!');
console.log(Names);

//shift
Names.shift(); // removes 1st elemnt
console.log(Names);

//unshift
Names.unshift('Alok'); // places the new element at 0 index
console.log(Names);

//tostring
console.log('Array as string');
console.log(Names.toString());

// using delete method empties and leaves undefined holes

//merge using concat
let m = a.concat(Names);
console.log('Merged using concat');
console.log(m);

//merge using + operator
console.log('Merged using + operator');
m = a + Names;
console.log(m);

//merge three arrays
console.log('Merge of three arrays');
m = a.concat(Names, arr);
console.log(m);

//splice
console.log('Splice that deletes 1 element from 2nd position and adds 8 and 9');
a.splice(2, 1, 8, 9);
console.log(a);

//slice from postion to end of array
console.log(
  'slice slices out elements after the specified position till end of array without deleting the elements from the source array'
);
a1 = a.slice(3);
console.log(a1);

//slice from start position to end position
console.log(
  'slice slices out elements after the specified position upto end position(not including the end element) without deleting the elements from the source array'
);
a1 = a.slice(1, 4);
console.log(a1);

//sort alphabetically
let b = [3214, 314, 65, 2, 4];
console.log('sort() sorts the array as a string in alphabetical order');
console.log(b.sort());

//reverse
console.log('Reverse of an array');
console.log(b.reverse());
