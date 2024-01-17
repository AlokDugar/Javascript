//reduce() reduces the elemnts of an array to single value
let p=[5,23,324,241,12]
const t=p.reduce(Sum)
console.log(t)
function Sum(a,e){
    return a+e;
}


const grades=[99,50,78,80,95]
const max=grades.reduce(maxi)
console.log(max)
function maxi(a,e)
{
    return a>e?a:e
}