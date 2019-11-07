/* eslint-disable strict */
///
///




function checkForSum(numList, numZ) {

    let myMap = new Map()


    for (const number of numList) {
        myMap.set(number)

        if (myMap.has(numZ - number)) {
            return true
        }
    }
    return false

}