let a = [1, 2, 3, 4, 5];
let s = '';
console.log('ForEach');
a.forEach(element => {
  console.log(element);
  s += element + ' ';
});
console.log(s);
console.log('For inside ForEach');
a.forEach(element => {
  s = '';
  for (let j = 0; j < element; j++) {
    s += a[j] + ' ';
  }
  console.log(s);
});
