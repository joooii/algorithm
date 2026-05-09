function solution(arr, n) {
    // 홀수
    if (arr.length % 2 === 1) {
        return arr.map((num, i) => i % 2 === 0 ? num+n : num)
    // 짝수
    } else {
        return arr.map((num, i) => i % 2 === 1 ? num+n : num)
    }
}