function solution(arr, divisor) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        } 
    }
    if (answer.length === 0) {
        answer.push(-1);
        return answer;
    };
    
    return answer.sort((a,b) => a-b);
}

// arr를 돌면서 divisor로 나누어서 나누어 떨어지는 값만 새 배열에 담고 오름차순
// 하나도 없으면 배열에 -1 담아서 반환