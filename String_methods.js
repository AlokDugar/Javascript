let s = 'My name is Alok Dugar. Welcome Alok Dugar!';

//length
console.log(s.length);

//indexOf
console.log(s.indexOf('Alok')); // returns index of first Alok in string
console.log(s.indexOf(' ')); // returns index of first space character

//lastIndexOf
console.log(s.lastIndexOf('Alok')); // returns index of last Alok in string

//slice
console.log(s.slice(0, 4));

//splice is also similar as array

//replace
console.log(s.replace('Alok', 'Harsh')); // it only replaces first Alok with Harsh

//replaceAll
console.log(s.replaceAll('Dugar', 'Surana')); // it replaces all Dugar with Surana
