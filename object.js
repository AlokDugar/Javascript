const person = {
  name: 'Alok Dugar',
  pn: 9804706675,
  add: 'Sano Gaucharan',
  age: 20,
  does_Alok_exist: true,
  hello:(n)=>console.log("Hi! My name is "+n)
};
console.log(person);
console.log('Name: ' + person['name']);
console.log('Phone: ' + person['pn']);
console.log('Address: ' + person['add']);
console.log('Age: ' + person['age']);
console.log(person['does_Alok_exist']);
console.log(person['college_name']);
console.log('Name:'+person.name)
person.hello(person.name)