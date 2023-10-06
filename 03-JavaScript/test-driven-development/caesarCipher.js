function caesarCipher(str, num) {
  let ret = ''
  for (let i in str) {
    if (isLetter(str[i])) {
      ret += charCheck(str[i], num);
    }
  }
  return ret;
}
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
function charCheck(letter, num) {
  let charCode = letter.charCodeAt(0);
  if ((charCode >= 65) && (charCode <= 90)) {
    if ((charCode + num) > 90) {
      return String.fromCharCode((charCode + num - 65) % 26 + 65)
    } else {
      return String.fromCharCode(charCode + num)
    }
  } else if ((charCode >= 97) && (charCode <= 122)) {
    if ((charCode + num) > 97) {
      return String.fromCharCode((charCode + num - 97) % 26 + 97)
    } else {
      return String.fromCharCode(charCode + num)
    }
  }
}

module.exports = caesarCipher;
