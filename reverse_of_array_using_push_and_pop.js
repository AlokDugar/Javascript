let a = [10, 20, 30];
let b = [];
const l = a.length;
for (i = 0; i < l; i++) {
  b.push(a.pop());
}
console.log(b);
