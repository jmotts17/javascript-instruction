// let gridHeight = 10;
// let gridWidth = 10;

// for(let i = 0; i < gridHeight; i++) {
//     let gridStr = "";
//     for(let j = 0; j < gridWidth; j+=2) {
//         if(i % 2 == 0) {
//             gridStr += " #";
//         } else {
//             gridStr += "# ";
//         }
//     }
//     console.log(gridStr);
// }

let bindingSize = 23;
let grid = "";
for(let i = 0; i < bindingSize; i++) {
    let gridRow = "";
    let evenChar = (i % 2 == 0) ? "#" : " ";
    let oddChar = (i % 2 != 0) ? "#" : " ";

    while(gridRow.length < bindingSize) {
        if(gridRow.length % 2) {
            gridRow += evenChar;
        } else {
            gridRow += oddChar;
        }
    }

    if(i < bindingSize - 1) {
        gridRow+="\n";
    }
    grid += gridRow;
}

console.log(grid);