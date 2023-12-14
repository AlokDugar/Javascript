let g_unit = prompt('ENTER THE UNIT:');
let c_unit = prompt('Converted into:');
if (g_unit == 'm' && c_unit == 'km') {
  let m = prompt('Enter the value in meter:');
  let km = m / 1000;
  console.log('meter =', m);
  console.log('kilometer =', km);
} else if (g_unit == 'km' && c_unit == 'm') {
  let km = prompt('Enter the value in kilometer:');
  let m = km * 1000;
  console.log('kilometer =', km);
  console.log('meter =', m);
} else if (g_unit == 'cm' && c_unit == 'm') {
  let cm = prompt('Enter the value in centimeter:');
  let m = cm / 100;
  console.log('centimeter =', cm);
  console.log('meter =', m);
} else if (g_unit == 'm' && c_unit == 'cm') {
  let m = prompt('Enter the value in meter:');
  let cm = m * 100;
  console.log('meter =', m);
  console.log('centimeter =', cm);
} else if (g_unit == 'cm' && c_unit == 'km') {
  let cm = prompt('Enter the value in centimeter:');
  let km = cm / 10000;
  console.log('centimeter =', m);
  console.log('kilometer =', km);
} else if (g_unit == 'km' && c_unit == 'cm') {
  let km = prompt('Enter the value in kilometer:');
  let cm = km * 10000;
  console.log('kilometer =', km);
  console.log('centimeter =', cm);
}
