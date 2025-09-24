const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

let n = Number(input);
let count = 0;

if (n <= 99) {
  console.log(n);
} else {
  count = 99; // 1~99는 무조건 한수
  for (let i = 100; i <= Math.min(n, 999); i++) {
    let ones = i % 10;
    let tens = Math.floor((i / 10) % 10);
    let hundreds = Math.floor(i / 100);

    if ((ones - tens) === (tens - hundreds)) {
      count++;
    }
  }
  console.log(count);
}