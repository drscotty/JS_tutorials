function sumFibs(num) {
  return fibSeries(num).filter(x => x%2!=0 && x<=num).reduce((a, b) => a+b);
}

function fibSeries(n){
  let arr = [];
  for (let i=0; i<=n; i++){
    arr.push(fibonacci(i));
  }
  return arr;
}

function fibonacci(n){
  if (n < 2){
    return n
  } 
  else {
    return (fibonacci(n-2) + fibonacci(n-1))
  }
}

let N = 1000;
console.log("The fibonacci series for "+N+" is: "+fibSeries(N))
console.log("The sum of odd numbers is: "+sumFibs(N));
