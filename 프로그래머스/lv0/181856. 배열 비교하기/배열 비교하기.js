function solution(arr1, arr2) {
    if (arr1.length === arr2.length) {
        let sum1 = 0;
        let sum2 = 0;
        sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
        sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
        if (sum1 === sum2) {
            return 0
        } else if (sum1 < sum2) {
            return -1;
        } else {
            return 1
        }
    } else {
        if (arr1.length < arr2.length) {
            return -1;
        } else {
            return 1 
        }
    }
}