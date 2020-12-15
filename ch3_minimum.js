const min = function(a, b) {
    if(a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(min(5,10));

function min2(a, b) {
    return (a < b) ? a : b;
}

console.log(min2(30, 20));

let minArrow = (a, b) => (a < b) ? a : b; 

console.log(minArrow(2,3));