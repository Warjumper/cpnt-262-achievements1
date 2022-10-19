const number = 4;
console.log("Before", number);

const squared = number ** 2;
const remainder = number % Math.PI;

console.log("After - squared", squared);
console.log("After - remainder", remainder);
console.log("After - as money", `$${number.toFixed(2)}`);
console.log(number.toString());
console.log(number.toExponential(2));
console.log(number.toFixed(2));
console.log(number.toPrecision(2));
console.log(number.toLocaleString(number));
console.log(Number.parseInt(number));
console.log(Number.parseFloat(number));

function fits(x,y) {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
}
  return 'Does not fit!';
}

console.log(fits(4,8));
console.log(fits(4,9));

function real(x,y) {
  if (Number.isNaN(y / x)) {
    return 'Fascinating!';
  }
  return 'Not a real number!';
}

console.log(real());

console.log(Number.isNaN(4));
//expected outcome - false.

console.log(Number.isFinite(4));
//expected outcome - true.