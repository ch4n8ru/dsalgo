function buysell(arr){
    let n = arr.length;
  
  let i = 0;
    while(i < n-1){
  
        while((i <= n-2) && arr[i+1] <= arr[i]) i++
  
        if(i === n-1) break
        
        let buy = i
        i++;
  
        while( (i < n-1) &&arr[i+1] >= arr[i])
             i++;
        let sell = i
         
        console.log([buy , sell]) 
    }
      
  }
  
  buysell([100, 180, 260, 310, 40, 535, 695])