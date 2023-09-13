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
function less(num) {
  return num < 7;
}

function all2(arr, callback) {
  const slice = arr.pop();
  if (arr.length == 0) {
    return true;
  }
  if (callback(slice)) {
    return all2(arr, callback);
  } else {
    return false;
  }
}

function prodOfArr(arr) {
  const dog = arr.pop();
  if (arr.length == 0) {
    return dog;
  }
  return dog * prodOfArr(arr);
}

// console.log(sumRange(3));
// console.log(power(2, 4));
// console.log(factorial(5));
// console.log(all2([1, 9, 3], less))
console.log(prodOfArr([1, 2, 8]))
