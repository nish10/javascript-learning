let x;

const name = 'Nish';
const age = 26;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String properties and methods
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Access value by key
x = s[3];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('e');

x = s.substring(2, 5);

x = s.substring(7);

x = s.slice(-9, -5);

x = '     Hello World';

x = x.trim();

x = s.replace('World', 'John');

x = s.includes('Hell');

x = s.valueOf();

x = s.split('');

console.log(x);
