function minplatform(arr , dep){
    const compare = (a , b) => a-b
    arr = arr.sort(compare)
    dep = dep.sort(compare);
    console.log(arr )
    console.log(dep)
    let a = 1;
    let d = 0
    let platforms = 1
    result = 1
    while((a < arrival.length) && (d < departure.length)){
        if(arrival[a] <= departure[d]){
              a++;
              platforms++;
        }
        else{
            d++;
            platforms--;
        }
        if(platforms > result) result = platforms
    }

    return result
}


arrival = [900, 940, 950, 1100, 1500, 1800]
departure = [910, 1200, 1120, 1130, 1900, 2000 ]

minplatform(arrival , departure)