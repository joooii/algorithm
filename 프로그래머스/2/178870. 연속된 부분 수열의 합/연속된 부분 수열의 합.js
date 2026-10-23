function solution(sequence, k) {
    var left = 0;
    var right = 0;
    var result = [];
    var sum = sequence[0];
    
    while (left <= right && right < sequence.length) {
        if (sum < k) {
            if (right === sequence.length - 1) {
                break;
            } 
            right++;
            sum += sequence[right];
        } else if (sum > k) {
            sum -= sequence[left];
            left++;
        } else {
            if (result.length === 0 || result[1] - result[0] > right-left) {
                result = [left, right];
            }
            sum -= sequence[left];
            left++;
        }

    }
    return result;
}