function solution(x) {
    var har = x.toString().split("");
    var sum = 0;
    for (let i = 0; i < har.length; i++) {
        sum += Number(har[i]);
    }
    return x % sum === 0; 
}
