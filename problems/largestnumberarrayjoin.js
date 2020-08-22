function largest(array){



}

let cmp = (a , b)=>{
    nab = Number(a+b);
    nba = Number(b+a);

    console.log(nab , nba)
    if(nab > nba){  
    return -1
}
    else 
    return 1

}


a = ["54", "546", "548", "60"]
a.sort(cmp).join('')


b = [1,2,3,4,4]

for(let e of b){
    console.log(e)
}