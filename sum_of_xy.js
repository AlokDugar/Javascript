let x = 32; // var not used nowadays as it is global scoped not block scoped like let
let y = 9;
const z = 3.14;
{
  let x = 'Alok'; // using let allows us to change the value only for this particular block
  let y = 'Dugar';
  console.log(x + ' ' + y);
}
console.log(x + y + z);
