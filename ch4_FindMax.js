function findMax(numArr) {
    let maxNum = 0;

    for(let i = 0; i < numArr.length; i++) {
        if(numArr[i] > maxNum) {
            maxNum = numArr[i];
        }
    }
    return maxNum;
}

function findMaxAndIndex(numArr) {
    let maxNum = 0;
    let maxIndex = 0;

    for(let i = 0; i < numArr.length; i++) {
        if(numArr[i] > maxNum) {
            maxNum = numArr[i];
            maxIndex = i;
        }
    }
    return { max: maxNum, index: maxIndex};
}

console.log(findMax([12, 35, 6]));
console.log(findMaxAndIndex([12, 35, 6]));