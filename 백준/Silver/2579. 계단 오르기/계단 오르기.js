const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

let floors = input[0];
let floorNums = [0, ...input.slice(1)];

let memo = [];

memo[1] = floorNums[1];

if (floors >= 2) {
  memo[2] = floorNums[1] + floorNums[2];
}

if (floors >= 3) {
  memo[3] = Math.max(floorNums[1] + floorNums[3], floorNums[2] + floorNums[3]);
}

for (let i = 4; i <= floors; i++) {
  memo[i] = Math.max(
    memo[i - 2] + floorNums[i],
    memo[i - 3] + floorNums[i - 1] + floorNums[i]
  );
}
console.log(memo[floors]);
