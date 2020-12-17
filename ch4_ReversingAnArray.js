function reverseArray(oldArray) {
    let newArray = [];
    let oldCount = oldArray.length - 1;

    for(let i = 0; i < oldArray.length; i++) {
        newArray[i] = oldArray[oldCount];
        oldCount--;
    }
    return newArray;
}

function reverseArrayInPlace(arr) {
    let halfArr = Math.floor(arr.length / 2);
    let endArr = arr.length - 1;

    for(let i = 0; i < halfArr; i++) {
        let value = arr[i];
        arr[i] = arr[endArr];
        arr[endArr] = value;
        endArr--;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);