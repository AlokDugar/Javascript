//filter() creates new array by filtering true valu elements
let age=[20,18,17,19,16,15,80]
const s=age.filter(isStudent);
console.log(s);
function isStudent(e){
    return e>=18&&e<=20;
}