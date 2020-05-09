/* PROBLEM:
write a function called that takes a number and an exponent 
similar to math.pow RECURSIVELY

CONCRETE EXAMPLE:
2,3 ==> 2*2*2
*/



function power(num , exp){
    if (exp == 0)   return 1;
    return num * power(num , exp - 1)
    
}

power(2,0) // 1
power(2,2) // 4
power(2,4) // 16
