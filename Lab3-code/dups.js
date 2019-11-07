function removeDups(arr) {
    let newArr = []
    let mySet = new Map()

    for (let number of arr) {
        mySet.set(number, true)
    }

    for (let key of mySet.keys()) {
        newArr.push(key)
    }

    return newArr;
}