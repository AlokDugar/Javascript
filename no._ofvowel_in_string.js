let s = 'Hello Alok';
s = s.toLowerCase();
let n = 0;
for (i = 0; i < s.length; i++) {
  if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
    n += 1;
  }
}
console.log(n);
