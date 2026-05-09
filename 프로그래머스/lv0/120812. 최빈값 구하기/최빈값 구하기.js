function solution(array) {
    var sortedArray = array.sort((a,b) => a - b);

    let choi = -1; // 최빈값이 뭔지
    let choiRepeatCnt = 0; // 최빈값이 될 때 몇번 반복해서 된건지
    let repeatCnt = 0; // 현재 똑같은 숫자가 몇번 등장했는지 
    let beforeNum = -1; // 이전 숫자
    let isDupChoi = false; // 최빈값 중복
    
    for (let i=0; i < array.length; i++) {
        // 반복을 세주는 로직
        if (beforeNum !== array[i]) {
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt + 1;
        }
        
        // 최빈값 등장할 때 반복 횟수와 현재 반복된 횟수가 같고, 최빈값이 현재 값이 아니라면 중복 = true
        if (choiRepeatCnt === repeatCnt) {
            if (choi !== array[i]) {
                isDupChoi = true;
            }
        }
        
        // 지금 반복하는 횟수 > 최빈값이 등장할 때 반복 횟수
            // 새로운 최빈값이 등장 -> 최빈값을 현재 값으로 변경
            // 최빈값 반복 횟수가 지금 반복 횟수라는 걸 알려줌
            // 최빈값이 중복이 아니라는 것을 알려줌
        if (repeatCnt > choiRepeatCnt) {
            choi = array[i];
            choiRepeatCnt = repeatCnt;
            isDupChoi = false;
        }
        beforeNum = array[i];
    }
    if (isDupChoi) return -1;
    return choi;
}

// 배열 정렬
// 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
// 최빈값을 그때그때 기록한다.