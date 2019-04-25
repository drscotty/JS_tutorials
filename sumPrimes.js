function sumPrimes(num) {
    return primes(num).reduce((a, b) => a+b);
}

function primes(num){
    let primes=[], sieve=[];

    for (let i=2; i<=num; i++){
        if (sieve.indexOf(i)==-1){
            primes.push(i);
            for (let j=i+1; j<=num; j++){
                if (j%i===0){
                sieve.push(j);
                }
            }
        }
    }
    return primes
}
  
console.log(sumPrimes(10));