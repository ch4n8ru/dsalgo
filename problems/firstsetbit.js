function firstSetBit(num){  

    return Math.log2(num & -num) + 1
    }
    
    firstSetBit(18)