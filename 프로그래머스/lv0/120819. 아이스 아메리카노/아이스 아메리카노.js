function solution(money) {
    var iceAmericano = 5500;
    var price = Math.floor(money / iceAmericano);
    var leftMoney = money % iceAmericano
    // return leftMoney;
    var answer = [price, leftMoney];
    
    return answer;
}