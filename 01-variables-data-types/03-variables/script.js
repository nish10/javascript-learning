// ways to declare a vairble
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
//  - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatiing
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables

age = 31;
console.log(age);

let score;

score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// x = 200; TypeError

// const score1; SyntaxError

const arr = [1, 2, 3, 4, 5];

// arr = [1, 2, 3, 4]; TypeError

arr.push(6);

console.log(arr);

const person = {
  name: 'Nish',
};

person.name = 'John';

person.email = 'nishant.raj334@gmail.com';

console.log(person);

// Declare multiple values at once

let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
