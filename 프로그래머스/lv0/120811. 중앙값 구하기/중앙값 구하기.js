function solution(array) {
    var answer = array.sort((a, b) => a - b);
    
    return answer[Math.floor(array.length / 2)];    
    
}

// 배열 안에 있는 수를 오름차순 정렬 -> array.sort()
// 정렬 후 중앙값 구하기 -> 배열의 길이/2 에서 몫의 소수값 버림