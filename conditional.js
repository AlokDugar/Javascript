let a;
if (a == true) {
  console.log('Alok');
} else if (a == false) {
  console.log('Not Alok');
} else {
  console.log('Undefined', 'Invalid!');
}
//a is true for this block but globally it is still undefined
{
  let a = true;
  switch (a) {
    case true:
      console.log('Alok');
      break;
    case false:
      console.log('Not Alok');
      break;
    default:
      console.log('Undefined', 'Invalid!');
  }
}
console.log(a);
