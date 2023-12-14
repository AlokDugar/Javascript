const num = prompt('Enter the number:');
for (let i = 0; i <= 10; i++) {
  let r = i * num;
  console.log(num, '*', i, '=', r);
  console.log(`${num} x ${i} = ${r}`);
}
