let a = [1, 2, 3, 4, 5];
let j = 0;
let s;
while (j <= a.length) {
  let i = 0;
  s = '';
  while (i < j) {
    s += a[i] + ' ';
    i++;
  }
  console.log(s);
  j++;
}
