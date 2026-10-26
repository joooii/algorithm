function solution(bridge_length, weight, truck_weights) {
    var queue = [];
    var time = 0;
    var index = 0; // 트럭 대수
    var sum = 0; // 다리 위 트럭 무게
    
    while (index < truck_weights.length || sum > 0) {
        time++;
        
        // 다리 위 트럭대수가 최대 대수를 넘지 않을 경우
        if (queue.length === bridge_length) {
            sum -= queue.shift();
        }
        
        if (sum + truck_weights[index] <= weight && index < truck_weights.length) {
            queue.push(truck_weights[index]);
            sum += truck_weights[index];
            index++;
        } else {
            queue.push(0);
        }
    }
    return time;   
}