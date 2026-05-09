function solution(numbers) {
    var answer = [];
    
    for (i = 0; i < numbers.length; i++) {
        // answer.push(numbers[i] * 2);
        answer[i] = numbers[i] * 2;
    }
    
    return answer;
}

// 1. 배열 안에서 원소 꺼내야 함.
// 2. 원소를 꺼내 2배를 한 후 새 배열에 넣어줘야 함.