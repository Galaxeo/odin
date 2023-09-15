function fibs(num) {
  let val = 2;
  let retArr = [0, 1];
  if (num == 1) {
    return [0];
  } else if (num == 2) {
    return [0, 1];
  }
  while (val != num) {
    retArr.push(retArr[val - 1] + retArr[val - 2]);
    val += 1;
  }
  return retArr;
}
console.log(fibs(8));
function fibsRec(num) {
  if (num == 1) {
    return 0;
  } else if (num == 2) {
    return 1;
  }
  return (fibsRec(num - 1) + fibsRec(num - 2));
}
console.log(fibsRec(8)); //too lazy to make one that appends to a list 
