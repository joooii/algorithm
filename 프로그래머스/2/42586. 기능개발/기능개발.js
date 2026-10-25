function solution(progresses, speeds) {
    var task = [];
    
    for (let i = 0; i <progresses.length;i++) {
        task.push(Math.ceil((100-progresses[i]) / speeds[i]));
    }
    
    var deployDay = task[0];
    var count = 1;
    var result = [];
    
    for (let i = 1; i < task.length; i++) {
        if (task[i] <= deployDay) {
            count++;
        } else {
            result.push(count);
            deployDay = task[i];
            count = 1;
        }
    }
    result.push(count);
    return result;
}