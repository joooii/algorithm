function solution(n) {
    var answer = [];
    
    for (let i = 1; i <= n; i+= 2) {
        // if (i % 2 === 1) {
            answer.push(i);
        // }
    }
    
    let sortedAnswer = answer.sort((a, b) => a - b);
    
    return sortedAnswer;
}

// n까지의 정수 값을 배열 안에 넣음
// 배열 안에서 짝수값을 제외 (나머지가 === 1인 것이 홀수)
// 오름차순 정렬