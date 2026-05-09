function solution(price) {
    
    // price > 0 && price <= 1000000
    if (price >= 100000 && price < 300000) {
        discount = price * 0.05;
        result = Math.floor(price - discount);
        return result;
    } else if (price >= 300000 && price < 500000) {
        discount = price * 0.1;
        result = Math.floor(price - discount);
        return result;
    } else if (price >= 500000) {
        discount = price * 0.2;
        result = Math.floor(price - discount);
        return result;
    } else {
        result = Math.floor(price);
        return result;
    }
}