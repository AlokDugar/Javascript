const person = {
    name: 'Alok Dugar',
    pn: 9804706675,
    add: 'Sano Gaucharan',
    age: 20,
    does_Alok_exist: true,
    hello:function(){console.log(`Hi! My name is ${this.name}`)}
  };
person.hello()
console.log(this)