const person={
    name:"Alok Dugar",
    age: 20,
    address:{
        city:"Ktm",
        street:"SanoGaucharan"
    }
}
console.log(person.address.city)
for(let p in person.address){
    console.log(person.address[p])
}