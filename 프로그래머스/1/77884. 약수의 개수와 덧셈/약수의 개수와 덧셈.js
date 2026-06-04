function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) { // 제곱근이 정수 (i가 제곱수면) 약수 개수는 홀수
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}