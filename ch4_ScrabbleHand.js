let tileN = { tile: "N", score: 1 };
let tileK = { tile: "K", score: 5 };
let tileZ = { tile: "Z", score: 10 };
let tileX = { tile: "X", score: 8 };
let tileD = { tile: "D", score: 2 };
let tileA = { tile: "A", score: 1 };
let tileE = { tile: "E", score: 1 };

let tiles = [ tileN, tileK, tileZ, tileX, tileD, tileA, tileE];

function maximumScore(tilesArr) {
    let maxScore = 0;

    for(let i = 0; i < tilesArr.length; i++) {
        maxScore += tilesArr[i].score;
    }
    return maxScore;
}

console.log(maximumScore(tiles));