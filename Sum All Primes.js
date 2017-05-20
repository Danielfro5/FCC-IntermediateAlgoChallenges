function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}



function sumPrimes(num) {
  var numArr = getPrimes(num);
  var numAns = 0;

    for(i=0;i<numArr.length;i++){
    numAns += numArr[i];
    console.log(numAns);
   }
  return numAns;
}

sumPrimes(10);





//create an array of prime numbers up to and including NUM and return the sum


//create an array of prime numbers up to NUM and return the sum
//IF divided numbers between 1 and input number !== float {number is not prime}
