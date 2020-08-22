function sortByFreq(arr){
    let freqHash = {};
    for(let i =0; i< arr.length;i++){
        elem = arr[i];
        let oldFreq = freqHash[elem] ? freqHash[elem].freq : 0;
        let oldIndex = freqHash[elem] ? freqHash[elem].findex : i
        freqHash[elem] = {freq:oldFreq+1 , findex:Math.min(oldIndex , i)}
    }

    const comparator = (a , b) => {
        if(freqHash[a].freq === freqHash[b].freq) {
            if(freqHash[a].findex < freqHash[b].findex) return -1
            else return 1
        }
        else return freqHash[b].freq - freqHash[a].freq
    }
 
    arr.sort(comparator)
    console.log( arr , freqHash)
}


let arr = [2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8]
sortByFreq(arr)