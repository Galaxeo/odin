function analyzeArray(arr) {
  let average = 0;
  for (let i in arr) {
    average += arr[i];
  }
  average = average / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let obj = {
    average: average,
    min: min,
    max: max,
    length: arr.length
  }
  return obj;
}
module.exports = analyzeArray;
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
