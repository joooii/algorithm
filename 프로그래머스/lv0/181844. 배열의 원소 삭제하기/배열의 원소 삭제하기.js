function solution(arr, delete_list) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        let index = delete_list.indexOf(arr[i]);
        
        if (index === -1) {
            answer.push(arr[i])
        }
    }
    return answer;
}

// arr.length 돌면서 삭제할 인덱스 값 찾기
// 만약 인덱스가 -1 (= 찾는 문자열이 없으면) arr i번째 위치에 푸시