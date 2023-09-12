function sumRange(num) {
  if (num == 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}
function power(num, exp) {
  if (exp == 0) {
    return 1;
  }
  return num * power(num, exp - 1);
}
function factorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(sumRange(3));
console.log(power(2, 4));
console.log(factorial(5));
