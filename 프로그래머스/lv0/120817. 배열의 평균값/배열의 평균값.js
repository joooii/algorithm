function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // sum = sum + numbers[i];
        sum += numbers[i];
    }
    
    let mean = sum / numbers.length;
    return mean;
}
// 누적한 값을 담을 변수를 미리 만들어줘야 함
// 배열 안에 있는걸 다 더함 -> 원소값 자리 하나씩 늘려가면서 더하기