function range(start, end, step=1) {
    let numRange = [];
    if(step < 0) {
        for(start; start >= end; start+=step) {
            numRange.push(start);
            }
    } else { 
        for(start; start <= end; start+=step) {
            numRange.push(start);
        }
    }
    return numRange;
}

function sum(numArray) {
    let sum = 0;
    for(let i = 0; i < numArray.length; i++) {
        sum+= numArray[i];
    }
    return sum;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1,10, 2)));