function kthbitset(num , k){
    return num & (1<<(k-1))     
}

kthbitset(75 , 4)