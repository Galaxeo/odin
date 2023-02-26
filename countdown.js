const primen = []
let num = 10;
primes:
for (let i = 2; i <= num; i++){
  for (let j = 2; j < i; j++){
    if (i % j == 0){
      continue primes
    }
  }
  console.log(i);
  primen.push(i);
}
console.log(primen);
for (const prime of primen){
  console.log(prime);
}