let tileN = { tile: "N", score: 1, bonus: 3 };
let tileK = { tile: "K", score: 5 };
let tileZ = { tile: "Z", score: 10 };
let tileX = { tile: "X", score: 8, bonus: 5 };
let tileD = { tile: "D", score: 2 };
let tileA = { tile: "A", score: 1 };
let tileE = { tile: "E", score: 1 };
let tileB = { tile: "B", score: 2 };
let tileV = { tile: "V", score: 4 };
let tileF = { tile: "F", score: 4 };
let tileU = { tile: "U", score: 1 };
let tileO = { tile: "O", score: 1 };

let tileHand1 = [ tileN, tileK, tileZ, tileX, tileD, tileA, tileE];
let tileHand2 = [tileB, tileV, tileF, tileU, tileD, tileO, tileU ];

function maximumScore(tileHand) {
    let maxScore = 0;

    for(let i = 0; i < tileHand.length; i++) {
        maxScore += tileHand[i].score;
        if (tileHand[i].bonus != undefined) {
            maxScore += tileHand[i].bonus;
        }
    }
    return maxScore;
}

console.log(maximumScore(tileHand1));
console.log(maximumScore(tileHand2));