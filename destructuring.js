const n=[1,2,3,4,5];

[n[0],n[3]]=[n[3],n[0]];
console.log(n);

let a=1;
let b=2;
[a,b]=[b,a];
console.log(a);
console.log(b);

const[x,y,z,...extra]=n;
console.log(x);
console.log(y);
console.log(z);
console.log(extra);