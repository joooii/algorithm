function solution(num_str) {
    return [...num_str].map(Number).reduce((a,b) => a + b)
}

// ... 사용
// 1. num_str을 배열로 반환 (스프레드 연산자)
// 2. map으로 숫회하면서 숫자로 형변환 (Number())
// 3. reduce()로 배열 각 요소 순회하면서 누적값 a에 현재 요소 b를 더해서 반환