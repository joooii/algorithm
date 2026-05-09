function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    // 1. 분자, 분모 통분 및 덧셈
    const numer = numer1*denom2 + numer2*denom1;
    const denom = denom1*denom2;
    
    // 2. 분자분모의 최대공약수로 나눠줌(약분)
    // 2-1. 분자분모 중 작은 수 찾기
    let minNumber;
    if (numer < denom) {
        minNumber = numer;
    } else {
        minNumber= denom;
    }
    
    // 2-2. 작은 수를 분자분모로 나눠보기
    // 2-2-1. 둘다 나누어 떨어지면 그 나눈 수가 최대공약수
    // 2-2-2. 안 나누어 떨어지면 작은 수를 1 줄이고 2-2로 돌아가기 
    while(true) {

        if (numer % minNumber === 0) {
            if (denom % minNumber === 0) {
                return [numer / minNumber, denom / minNumber];
            }
        }
        minNumber = minNumber - 1;
    }
    
}