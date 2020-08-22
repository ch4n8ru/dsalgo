function rightMostDiff(m , n){
    let xor = m ^ n;
    return Math.log2(xor & -xor) + 1
   }