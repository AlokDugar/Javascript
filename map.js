//map() accepts a callback and applies 
//it for each elemnt of an array 
//and returns an array
let n=[1,2,3,4,5]
const e=n.map(isEven)
const s=n.map(sq)
console.log(e);
console.log(s);
function isEven(e){
    return e%2===0;
}
function sq(e){
    return Math.pow(e,2);
}