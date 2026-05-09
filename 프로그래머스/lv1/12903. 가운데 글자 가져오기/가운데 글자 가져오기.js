function solution(s) {
    var answer = '';
    // s 문자열 길이 구하기
    const len = s.length
    // 짝/홀 판단
    if (len % 2 === 0) {
        // 가운데 인덱스 계산
        // 짝수면, 문자열의 가운데 인덱스로부터 2번째 문자열까지 추출
        return s.slice(len / 2 - 1, len / 2 + 1);
        
    } else {
        // 가운데 인덱스 계산
        // 홀수면, 문자열의 가운데 인덱스 문자열 추출
        // const idx = Math.floor(len / 2);
        // return s[idx];
        return s[Math.floor(len / 2)];
    }
    return answer;
}

// 맨 처음 생각
// 1. s의 각 글자를 새 배열에 넣기
// 2. 배열.length 계산 후, 짝수면 n/2번째~ +1째, 홀수면 n+1/2번째 값을 꺼낸다
// 3. string으로 반환한다.

// 수정 사고
// 1. 문자열 길이 구하기
// 2. 길이가 홀/짝 판단
// 3. 가운데 인덱스 계산
// 4. 해당 위치의 문자(or 2개) 반환