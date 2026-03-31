function solution(array, commands) {
    const answer =[];
    for (let x = 0; x < commands.length; x++) {
        // command에서 i,j,k 꺼내기
        let i = commands[x][0];
        let j = commands[x][1];
        let k = commands[x][2];
        
        // slice
        const sliced = array.slice(i-1, j);
        // 오름차 정렬
        sliced.sort((a,b) => a-b);
        // 정렬된 배열에서 k-1번째 값 꺼낸 후 push
        answer.push(sliced[k-1]);
    }
    return answer;
}

// 수정 사고
// 1. commands를 순회
// 2. 각 command에서 i,j,k 꺼내기
// 3. array.slice(i-1, j)로 부분 배열 생성
// 4. 해당 배열 -> 오름차순 정렬
// 5. 정렬된 배열에서 k-1번째 값 꺼내기
// 6. 결과 배열에 push