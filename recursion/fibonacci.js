

/* Write a function that return the nth number in the fibonacci sequence */
function fib(n){
    
if(n <= 2) return 1
return   fib(n-1) + fib(n-2)
  }

let res;
res = 
  fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
console.log(res)