function FizzBuzz(num) {
  let str = "";
  if (num % 3 == 0) { str += "Fizz"; }
  if (num % 5 == 0) { str += "Buzz"; }
  return str;
}
const grepo = "dog";
let answer = 15;//parseInt(prompt("Please enter number for FizzBuzz"))
for (let i = 1; i <= answer; i++) {
  if (FizzBuzz(i) == "") {
    console.log(i);
  }
  else {
    console.log(FizzBuzz(i));
  }
}
