function reverseString(str) {
  let ret = '';
  let i = str.length - 1;
  while (i >= 0) {
    ret += str[i];
    i -= 1;
  }
  return ret;
}
module.exports = reverseString;

