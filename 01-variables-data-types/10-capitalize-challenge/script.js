const myString = 'developer';

let myNewString = myString.toLowerCase();
// myNewString = myNewString.charAt(0).toUpperCase() + myNewString.substring(1);

// myNewString = myNewString[0].toUpperCase() + myNewString.substring(1);

myNewString = `${myNewString[0].toUpperCase()}${myNewString.substring(1)}`;

console.log(myNewString);
