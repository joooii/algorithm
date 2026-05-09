// function solution(my_string, n) {
//     var answer = '';
//     for (let i = 0; i < my_string.length; i++) {
//         for (let j = 0; j < n; j++) {
//             answer += my_string[i];
//         }
//     }
//     return answer;
// }

function solution(my_string, n) {
    var answer = [...my_string].map((item) => item.repeat(n));
    var join = answer.join('')
    
    return join;
}