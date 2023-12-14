/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
let a = [1, 2, 3, 4, 5];
let s;
for (let i = 1; i <= a.length; i++) {
  s = '';
  for (let j = 0; j < i; j++) {
    s += a[j] + ' ';
  }
  console.log(s);
}
