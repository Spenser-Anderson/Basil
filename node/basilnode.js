const randomNumber = require('random-number');

const randomIndex = randomNumber({
  min: 0,
  max: 4,
  integer: true,
});

console.log(randomIndex);
console.log(typeof randomNumber);
console.log(typeof randomIndex);
