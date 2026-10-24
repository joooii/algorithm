function solution(k, m, score) {
    score.sort((a,b) => b-a);
    var result = 0;

    for (let i = 0; i + m <= score.length; i+=m) {
        result += score[i+m-1] * m;
    }
    return result;

}

