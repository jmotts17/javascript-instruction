const triangleLength = 7;
let hashTags = "";

for(let i=0; i < triangleLength; i++) {
    while(hashTags.length <= i) {
        hashTags += "#";
    }
    console.log(hashTags);
}

// for(let hashTags = "#"; hashTags.length <= 7; hashTags += "#") {
//     console.log(hashTags);
// }