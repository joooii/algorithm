const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = input[0].split(" ");
let total = 0;
let validate = 0;

for (let i = 0; i < n.length; i++) {
  let t = Math.pow(n[i], 2);
  total += t;
}
validate = total % 10;
console.log(Number(validate));