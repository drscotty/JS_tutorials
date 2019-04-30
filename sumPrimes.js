//---------------------------------------------------
// Function to calculate sum of 1D array
//---------------------------------------------------
let sum = (arr) => {return arr.reduce((a, b) => a+b)}

//---------------------------------------------------
// Function to compute array of prime numbers
//---------------------------------------------------
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

// Run the code
console.log(sum(primes(10)));