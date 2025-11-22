const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// n: 수열 갯수 , x: 기준 숫자
// A: 수열

let [n, x] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);

let min = [];

for (let i = 0; i < n; i++) {
  if (a[i] < x) {
    min.push(a[i]);
  }
}
console.log(min.join(" "));
