function coinchange(candidates , target, index = 0, usedNumbers = [] , combinations=[]){
    

    if(target <= 0){
        if(target===0){
            combinations.push(usedNumbers.slice())
        }
        return 
    }
    
    if(index < candidates.length){
        while(index > 0 && candidates[index] === candidates[index - 1]) index+=1
        let value = candidates[index];

        usedNumbers.push(value);
        coinchange(candidates , target - value, index, usedNumbers , combinations);

        usedNumbers.pop();

        coinchange(candidates , target, index + 1, usedNumbers, combinations)

        
    }
    return combinations
}

A = [10,1,2,7,6,1,5].sort((a,b) => a-b)

coinchange(A , 8)