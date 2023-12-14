let a = [1, 2, 3, 4, 5];
let s;
let j = 1;
do {
  s = '';
  let i = 0;
  do {
    s += a[i] + ' ';
    i++;
  } while (i < j);
  console.log(s);
  j++;
} while (j <= a.length);
