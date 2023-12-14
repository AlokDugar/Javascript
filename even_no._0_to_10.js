for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
let s = '';
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    s += i + ' ';
  }
}
console.log(s);
for (let i = 0; i < 10; i = i + 2) {
  console.log(s[i]);
}
