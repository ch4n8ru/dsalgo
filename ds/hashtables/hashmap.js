/* Key value pair where the keys are generated */


class HashMap {

  constructor(size = 3) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push({
      key,
      value
    })
    return index
  }

  get(key) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) return null
    let kv = undefined;
    this.keyMap[idx].forEach(arr => {
      if (arr.key === key) kv = arr.value
    })
    return kv
  }

  keys(keyMap = this.keyMap) {
    let keyArray = [];
    for (let i = 0; i < keyMap.length; i++) {
      if (!Array.isArray(keyMap[i]) && typeof keyMap[i] === "object") {

        keyArray.push(keyMap[i].key)
      } else if (Array.isArray(keyMap[i]) && typeof keyMap[i] === "object") {
        keyArray = keyArray.concat(this.keys(keyMap[i]))
      }
    }
    return keyArray
  }

  values(keyMap = this.keyMap) {
    let valuesArray = [];
    for (let i = 0; i < keyMap.length; i++) {
      if (!Array.isArray(keyMap[i]) && typeof keyMap[i] === "object") {
        valuesArray.push(keyMap[i].value)
      } else if (Array.isArray(keyMap[i]) && typeof keyMap[i] === "object") {
        valuesArray = valuesArray.concat(this.values(keyMap[i]))
      }
    }
    return valuesArray
  }


}

hm = new HashMap();

hm.set('black', '#hhfdj')
hm.set('red', '#hhasfj')
hm.set('blue', '#ahhhfdj')
hm.set('orange', 'kh#hhfdj')
hm.set('cyan', '#ahdhjhfdj')
hm.set('white', '#tshhhfdj')
hm.set('green', '#vxcbhhfdj')
hm.set('yellow', '#43gwhhfdj')

/*
O(1) for insertions , access and deletion average case
it depends on the hash function 
 */