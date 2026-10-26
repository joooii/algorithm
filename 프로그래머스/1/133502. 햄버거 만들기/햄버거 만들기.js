function solution(ingredient) {
    var stack = [];
    var result = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        var n = stack.length;
        if (n >= 4 && stack[n-4] === 1 && stack[n-3] === 2 && stack[n-2] === 3 && stack[n-1] === 1) {
            result++;
            stack.splice(-4);
        }
    }
    return result;
}
