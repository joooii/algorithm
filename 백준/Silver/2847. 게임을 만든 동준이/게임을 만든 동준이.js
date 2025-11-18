const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

let n = input[0];
let levelScore = input.slice(1);
let count = 0;

for (let i = n - 1; i > 0; i--) {
  if (levelScore[i - 1] >= levelScore[i]) {
    count += levelScore[i - 1] - levelScore[i] + 1;
    levelScore[i - 1] = levelScore[i] - 1;
  }
}
console.log(count);