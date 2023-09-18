const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// algroithm to find any radnom no between min and max
/*

Math.floor(Math.random() * (max - min + 1) + min)

*/

console.log('x: ', x);
console.log('y: ', y);

const sumOutput = x + y;
const differenceOutput = x - y;
const productOutput = x * y;
const quotientOutput = x / y;
const rmOutput = x % y;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
