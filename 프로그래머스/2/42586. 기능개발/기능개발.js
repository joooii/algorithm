function solution(progresses, speeds) {
    var task = [];
    
    
    let result = [];
    
    for (let i = 0; i < progresses.length; i++) {
        task.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let deployDay = task[0];
    let count = 1;
    
    for (let i = 1; i < task.length; i++) {
        if (task[i] <= deployDay) {
            count++;
        } else {
            result.push(count);
            
            deployDay = task[i];
            count =1;
        }
        
    }
    result.push(count);
    
    return result;
}

// (100 - progresses[i]) / speeds[i] 해서 새 배열에 저장
// 이때 올림으로 처리 -> Math.ceil()

// 새 배열의 현재 원소가 i+1 원소보다 값이 작은 경우: 원소 개수를 result에 추가

// 큰 경우: count++ -> 작은 경우 만나면 count를 result에 저장
// count 초기화