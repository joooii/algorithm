function solution(num_list, n) {
    
    var answer = []
    // return num_list.slice(n-1);    
    for (let i = n-1; i < num_list.length; i++) {
        answer.push(num_list[i])
    }
    return answer
}
    
// n번째 원소에서부터 끝까지 출력