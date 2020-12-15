function countBs(str) {
    let bCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "B") {
            bCount++;
        }
    }
    return bCount;
}

console.log(countBs("BBC"));

function countChar(str, letter) {
    let letterCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == letter) {
            letterCount++;
        }
    }
    return letterCount;
}

console.log(countChar("kakkerlak", "k"));